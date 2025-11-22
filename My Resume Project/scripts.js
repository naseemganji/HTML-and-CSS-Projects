    document.getElementById("print-title").textContent = document.title;

document.addEventListener('DOMContentLoaded', function() {
    // --- Get Control Elements ---
    const fontSelect = document.getElementById('font-select');
    const primaryColorInput = document.getElementById('primary-color');
    const textColorInput = document.getElementById('text-color');
    const bgColorInput = document.getElementById('bg-color');
    const saveButton = document.getElementById('save-json');
    const loadInput = document.getElementById('load-json-input');

    // --- Event Listeners for Styling ---
    fontSelect.addEventListener('change', () => {
        document.body.style.fontFamily = fontSelect.value;
        saveStateToLocalStorage();
    });

    primaryColorInput.addEventListener('input', () => {
        document.querySelectorAll('h2, h3').forEach(h => h.style.color = primaryColorInput.value);
        saveStateToLocalStorage();
    });
    textColorInput.addEventListener('input', () => {
        document.body.style.color = textColorInput.value;
        document.querySelector('.resume-header h1').style.color = textColorInput.value;
        saveStateToLocalStorage();
    });
    bgColorInput.addEventListener('input', () => {
        const newBgColor = bgColorInput.value;
        document.querySelector('.container').style.backgroundColor = newBgColor;
        document.querySelector('footer').style.backgroundColor = newBgColor;
        saveStateToLocalStorage();
    });

    // Add listeners to editable content to save on change
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.addEventListener('blur', saveStateToLocalStorage); // Save when user clicks away
    });

    // --- Event Listeners for File I/O ---
    saveButton.addEventListener('click', exportStateToJsonFile);
    loadInput.addEventListener('change', loadStateFromJsonFile);

    // --- Load initial state from localStorage ---
    loadStateFromLocalStorage();
});

// --- State Management Functions ---

function getState() {
    const state = {
        styles: {
            font: document.getElementById('font-select').value,
            primaryColor: document.getElementById('primary-color').value,
            textColor: document.getElementById('text-color').value,
            bgColor: document.getElementById('bg-color').value,
        },
        content: {}
    };

    document.querySelectorAll('.container > h2').forEach(section => {
        const title = section.innerText.trim().replace(/\s+/g, '_');
        const contentElements = [];
        let nextElement = section.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'H2') {
            if (nextElement.hasAttribute('contenteditable')) {
                contentElements.push(nextElement.innerHTML);
            }
            nextElement = nextElement.nextElementSibling;
        }
        state.content[title] = contentElements;
    });
    return state;
}

function applyState(state) {
    // Apply styles
    document.getElementById('font-select').value = state.styles.font;
    document.getElementById('primary-color').value = state.styles.primaryColor;
    document.getElementById('text-color').value = state.styles.textColor;
    document.getElementById('bg-color').value = state.styles.bgColor;
    
    document.body.style.fontFamily = state.styles.font;
    document.querySelectorAll('h2, h3').forEach(h => h.style.color = state.styles.primaryColor);
    document.body.style.color = state.styles.textColor;
    document.querySelector('.resume-header h1').style.color = state.styles.textColor;
    document.querySelector('.container').style.backgroundColor = state.styles.bgColor;
    document.querySelector('footer').style.backgroundColor = state.styles.bgColor;

    // Apply content
    document.querySelectorAll('.container > h2').forEach(heading => {
        const title = heading.innerText.trim().replace(/\s+/g, '_');
        if (state.content[title]) {
            const contentArray = state.content[title];
            let contentIndex = 0;
            let nextElement = heading.nextElementSibling;
            while (nextElement && nextElement.tagName !== 'H2' && contentIndex < contentArray.length) {
                if (nextElement.hasAttribute('contenteditable')) {
                    nextElement.innerHTML = contentArray[contentIndex];
                    contentIndex++;
                }
                nextElement = nextElement.nextElementSibling;
            }
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
        console.log("Loading state from localStorage.");
        applyState(JSON.parse(savedState));
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
            saveStateToLocalStorage(); // Also save the loaded state to localStorage
            alert('Resume loaded successfully!');
        } catch (error) {
            alert("Failed to load resume. The JSON file may be corrupt.");
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