document.addEventListener('DOMContentLoaded', function() {
    // This line is now safely inside the event listener to ensure the element exists.
    const printTitleElement = document.getElementById("print-title");
    if (printTitleElement) {
        printTitleElement.textContent = document.title;
    }

    // --- Get Control Elements ---
    const fontSelect = document.getElementById('font-select');
    const primaryColorInput = document.getElementById('primary-color');
    const textColorInput = document.getElementById('text-color');
    const bgColorInput = document.getElementById('bg-color');
    const saveButton = document.getElementById('save-json');
    const loadInput = document.getElementById('load-json-input');
    const generateBtn = document.querySelector('.btn-primary');

    // --- Event Listeners for Styling ---
    if (fontSelect) {
        fontSelect.addEventListener('change', () => {
            document.body.style.fontFamily = fontSelect.value;
            saveStateToLocalStorage();
        });
    }

    if (primaryColorInput) {
        primaryColorInput.addEventListener('input', () => {
            document.querySelectorAll('h2, h3').forEach(h => h.style.color = primaryColorInput.value);
            saveStateToLocalStorage();
        });
    }

    if (textColorInput) {
        textColorInput.addEventListener('input', () => {
            document.body.style.color = textColorInput.value;
            const resumeHeaderH1 = document.querySelector('.resume-header h1');
            if (resumeHeaderH1) {
                resumeHeaderH1.style.color = textColorInput.value;
            }
            saveStateToLocalStorage();
        });
    }

    if (bgColorInput) {
        bgColorInput.addEventListener('input', () => {
            const newBgColor = bgColorInput.value;
            const containerEl = document.querySelector('.container');
            const footerEl = document.querySelector('footer');
            if (containerEl) {
                containerEl.style.backgroundColor = newBgColor;
            }
            if (footerEl) {
                footerEl.style.backgroundColor = newBgColor;
            }
            saveStateToLocalStorage();
        });
    }

    // Add listeners to editable content to save on change
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.addEventListener('blur', saveStateToLocalStorage);
    });

    // --- Event Listeners for File I/O ---
    if (saveButton) {
        saveButton.addEventListener('click', exportStateToJsonFile);
    }
    if (loadInput) {
        loadInput.addEventListener('change', loadStateFromJsonFile);
    }

    // --- Button Animation Functionality ---
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating...';

            // Simulate AI processing time
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check me-2"></i>Resume Generated!';
                this.classList.remove('btn-primary');
                this.classList.add('btn-success');

                // Reset button after 3 seconds
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-magic me-2"></i>Generate AI-Optimized Resume';
                    this.classList.remove('btn-success');
                    this.classList.add('btn-primary');
                }, 3000);
            }, 2000);
        });
    }

    // --- Load initial state from localStorage ---
    loadStateFromLocalStorage();
});

// --- State Management Functions ---

function getState() {
    const state = {
        styles: {
            font: document.getElementById('font-select') ? document.getElementById('font-select').value : null,
            primaryColor: document.getElementById('primary-color') ? document.getElementById('primary-color').value : null,
            textColor: document.getElementById('text-color') ? document.getElementById('text-color').value : null,
            bgColor: document.getElementById('bg-color') ? document.getElementById('bg-color').value : null,
        },
        content: {}
    };

    const contentSections = document.querySelectorAll('.card-body .generated-content, .card-body .resume-header');
    
    contentSections.forEach(section => {
        const title = section.querySelector('h2, h1') ? section.querySelector('h2, h1').textContent.trim() : 'Resume_Header';
        const editableContent = section.querySelectorAll('[contenteditable="true"]');
        
        state.content[title] = Array.from(editableContent).map(el => el.innerHTML);
    });

    return state;
}

function applyState(state) {
    // Apply styles
    const fontSelect = document.getElementById('font-select');
    const primaryColorInput = document.getElementById('primary-color');
    const textColorInput = document.getElementById('text-color');
    const bgColorInput = document.getElementById('bg-color');

    if (fontSelect && state.styles.font) {
        fontSelect.value = state.styles.font;
        document.body.style.fontFamily = state.styles.font;
    }
    if (primaryColorInput && state.styles.primaryColor) {
        primaryColorInput.value = state.styles.primaryColor;
        document.querySelectorAll('h2, h3').forEach(h => h.style.color = state.styles.primaryColor);
    }
    if (textColorInput && state.styles.textColor) {
        textColorInput.value = state.styles.textColor;
        document.body.style.color = state.styles.textColor;
        const resumeHeaderH1 = document.querySelector('.resume-header h1');
        if (resumeHeaderH1) {
            resumeHeaderH1.style.color = state.styles.textColor;
        }
    }
    if (bgColorInput && state.styles.bgColor) {
        bgColorInput.value = state.styles.bgColor;
        const containerEl = document.querySelector('.container');
        const footerEl = document.querySelector('footer');
        if (containerEl) {
            containerEl.style.backgroundColor = state.styles.bgColor;
        }
        if (footerEl) {
            footerEl.style.backgroundColor = state.styles.bgColor;
        }
    }

    // Apply content
    const contentSections = document.querySelectorAll('.card-body .generated-content, .card-body .resume-header');
    
    contentSections.forEach(section => {
        const title = section.querySelector('h2, h1') ? section.querySelector('h2, h1').textContent.trim() : 'Resume_Header';
        if (state.content[title]) {
            const contentArray = state.content[title];
            const editableContent = section.querySelectorAll('[contenteditable="true"]');
            editableContent.forEach((el, index) => {
                if (contentArray[index]) {
                    el.innerHTML = contentArray[index];
                }
            });
        }
    });
}

// --- LocalStorage Functions ---

function saveStateToLocalStorage() {
    const state = getState();
    localStorage.setItem('resumeState', JSON.stringify(state));
    console.log("State saved to localStorage.");
}

function loadStateFromLocalStorage() {
    const savedState = localStorage.getItem('resumeState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            applyState(state);
            console.log("State loaded from localStorage.");
        } catch (error) {
            console.error("Failed to parse state from localStorage:", error);
            localStorage.removeItem('resumeState');
        }
    }
}

// --- File I/O Functions ---

function exportStateToJsonFile() {
    const state = getState();
    const jsonString = JSON.stringify(state, null, 2);
    downloadFile(jsonString, 'resume.json', 'application/json');
}

function loadStateFromJsonFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const state = JSON.parse(e.target.result);
            applyState(state);
            saveStateToLocalStorage();
            alert('Resume loaded successfully!');
        } catch (error) {
            alert("Failed to load resume. The JSON file may be corrupt.");
            console.error("Error loading JSON file:", error);
        }
    };
    reader.readAsText(file);
}

function downloadFile(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}