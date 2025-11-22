// Default colors for spokes (more than 12 for options)
const defaultColors = [
    '#8b5cf6', // purple-500
    '#ef4444', // red-500
    '#22c55e', // green-500
    '#3b82f6', // blue-500
    '#f59e0b', // amber-500
    '#ec4899', // pink-500
    '#14b8a6', // teal-500
    '#6366f1', // indigo-500
    '#a855f7', // fuchsia-500
    '#06b6d4', // cyan-500
    '#eab308', // yellow-500
    '#f43f5e'  // rose-500
];

// Global declaration for categoriesData
let categoriesData = [
    { label: 'Physical Health', score: 7, color: defaultColors[0] },
    { label: 'Mental Health', score: 8, color: defaultColors[1] },
    { label: 'Family & Parents', score: 9, color: defaultColors[2] },
    { label: 'Career & Development', score: 7, color: defaultColors[3] },
    { label: 'Financial Stability', score: 6, color: defaultColors[4] },
    { label: 'Social Life', score: 5, color: defaultColors[5] },
    { label: 'Hobbies & Leisure', score: 6, color: defaultColors[6] },
    { label: 'Spirituality', score: 7, color: defaultColors[7] }
];

const canvas = document.getElementById('balanceWheelCanvas');
const ctx = canvas.getContext('2d');
const diagramTitleInput = document.getElementById('diagramTitle');
const numSpokesSelect = document.getElementById('numSpokes');
const categoryInputsDiv = document.getElementById('categoryInputs');
const generateWheelBtn = document.getElementById('generateWheelBtn');
const exportImageBtn = document.getElementById('exportImageBtn');
const errorMessage = document.getElementById('errorMessage');
const useSingleColorCheckbox = document.getElementById('useSingleColor');
const masterColorInput = document.getElementById('masterColor');

// Set canvas dimensions explicitly for a fixed size, then scale content within
const canvasSize = 650;
canvas.width = canvasSize;
canvas.height = canvasSize;

// Define padding for the entire diagram (including labels and title)
const contentPadding = 60;

// Function to generate category input fields
function generateCategoryInputs() {
    const numSpokes = parseInt(numSpokesSelect.value);
    categoryInputsDiv.innerHTML = ''; // Clear existing inputs

    // Adjust categoriesData size and assign default colors if needed
    while (categoriesData.length < numSpokes) {
        const defaultColorIndex = (categoriesData.length) % defaultColors.length;
        categoriesData.push({ label: `Category ${categoriesData.length + 1}`, score: 5, color: defaultColors[defaultColorIndex] });
    }
    if (categoriesData.length > numSpokes) {
        categoriesData = categoriesData.slice(0, numSpokes);
    }

    const isSingleColorMode = useSingleColorCheckbox.checked; // Check initial state of checkbox

    categoriesData.forEach((cat, index) => {
        const div = document.createElement('div');
        div.className = 'input-group category-input';
        div.innerHTML = `
            <label for="category${index + 1}Label" class="text-gray-700 text-sm">Category ${index + 1}:</label>
            <input type="color" id="category${index + 1}Color" value="${cat.color}" ${isSingleColorMode ? 'disabled' : ''}>
            <input type="text" id="category${index + 1}Label" value="${cat.label}" placeholder="Label" class="flex-grow focus:border-purple-500 focus:ring-purple-200">
            <input type="number" id="category${index + 1}Score" value="${cat.score}" min="0" max="10" class="focus:border-purple-500 focus:ring-purple-200">
        `;
        categoryInputsDiv.appendChild(div);

        // Add event listener for individual color input change
        document.getElementById(`category${index + 1}Color`).addEventListener('change', (e) => {
            if (!useSingleColorCheckbox.checked) { // Only update if not in single color mode
                categoriesData[index].color = e.target.value;
                drawBalanceWheel(); // Redraw immediately on color change
            }
        });
    });

    // Set initial disabled state for master color input
    masterColorInput.disabled = !isSingleColorMode;
}

// Helper function to wrap text
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let lines = [];

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // Adjust starting Y for vertical centering of wrapped text
    const startY = y - (lines.length - 1) * lineHeight / 2;

    for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i].trim(), x, startY + i * lineHeight);
    }
}


// Function to draw the balance wheel
function drawBalanceWheel() {
    errorMessage.textContent = ''; // Clear previous errors
    const title = diagramTitleInput.value;
    const numSpokes = parseInt(numSpokesSelect.value);

    // Read current data from inputs
    const currentCategoriesData = [];
    let hasError = false;
    for (let i = 0; i < numSpokes; i++) {
        const labelInput = document.getElementById(`category${i + 1}Label`);
        const scoreInput = document.getElementById(`category${i + 1}Score`);
        const colorInput = document.getElementById(`category${i + 1}Color`);

        if (!labelInput || !scoreInput || !colorInput) {
            hasError = true;
            errorMessage.textContent = 'Error: Missing category inputs. Please try regenerating.';
            return;
        }

        const label = labelInput.value.trim();
        let score = parseInt(scoreInput.value);
        const color = colorInput.value;

        if (label === '') {
            hasError = true;
            errorMessage.textContent = `Category ${i + 1} label cannot be empty.`;
            break;
        }
        if (isNaN(score) || score < 0 || score > 10) {
            hasError = true;
            errorMessage.textContent = `Category ${i + 1} score must be a number between 0 and 10.`;
            break;
        }
        currentCategoriesData.push({ label, score, color });
    }

    if (hasError) return;

    categoriesData = currentCategoriesData; // Update global data

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2; // Center of the canvas

    // Adjust the Y center of the wheel to allow space for the title at the top
    const wheelCenterY = centerY + (contentPadding / 2);

    // Calculate radius based on the smaller of effective width/height after accounting for padding and title space
    const availableDrawingHeight = canvas.height - (2 * contentPadding);
    const radius = Math.min(centerX - contentPadding, availableDrawingHeight / 2) * 0.9;

    const levelSpacing = radius / 10;

    // Draw concentric circles (levels) - FILLED RINGS (background grid)
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 1;

    for (let i = 10; i >= 1; i--) {
        ctx.beginPath();
        ctx.arc(centerX, wheelCenterY, i * levelSpacing, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(240, 240, 240, ${i / 10 * 0.5 + 0.1})`;
        ctx.fill();
        ctx.stroke();
    }

    // Draw numerical labels for levels
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 1; i <= 10; i++) {
        const numText = i.toString();
        const textX = centerX + (i * levelSpacing) - (ctx.measureText(numText).width / 2);
        const textY = wheelCenterY;
        if (i % 2 === 0 || i === 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 10) {
            ctx.fillText(numText, textX, textY);
        }
    }

    // Draw radial lines (spokes)
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 1;
    const angleStep = (2 * Math.PI) / numSpokes;

    for (let i = 0; i < numSpokes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, wheelCenterY);
        ctx.lineTo(centerX + radius * Math.cos(angle), wheelCenterY + radius * Math.sin(angle));
        ctx.stroke();
    }

    // Determine the color to use for filling based on the checkbox
    const useSingleColor = useSingleColorCheckbox.checked;
    const singleColor = masterColorInput.value;

    // Draw filled segments for each score level within each spoke
    categoriesData.forEach((cat, index) => {
        const score = cat.score;
        const startAngle = index * angleStep - Math.PI / 2;
        const endAngle = (index + 1) * angleStep - Math.PI / 2;

        // Set fill and stroke color based on checkbox state
        const activeColor = useSingleColor ? singleColor : cat.color;
        const rgb = hexToRgb(activeColor);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`;
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 2;

        for (let level = 1; level <= score; level++) {
            const innerRadius = (level - 1) * levelSpacing;
            const outerRadius = level * levelSpacing;

            ctx.beginPath();
            ctx.arc(centerX, wheelCenterY, innerRadius, startAngle, endAngle);
            ctx.lineTo(centerX + outerRadius * Math.cos(endAngle), wheelCenterY + outerRadius * Math.sin(endAngle));
            ctx.arc(centerX, wheelCenterY, outerRadius, endAngle, startAngle, true);
            ctx.lineTo(centerX + innerRadius * Math.cos(startAngle), wheelCenterY + innerRadius * Math.sin(startAngle));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    });

    // Draw category labels (positioned between radial lines and wrapped)
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Inter';
    
    const labelDistanceFromCircleEdge = 20;
    const labelOffset = radius + labelDistanceFromCircleEdge;

    const maxLabelWidth = (canvas.width / 2) - labelOffset - (contentPadding / 2);
    const lineHeight = 16;

    for (let i = 0; i < numSpokes; i++) {
        let labelAngle = (i * angleStep - Math.PI / 2) + (angleStep / 2);
        let labelX = centerX + labelOffset * Math.cos(labelAngle);
        let labelY = wheelCenterY + labelOffset * Math.sin(labelAngle);

        if (labelAngle > Math.PI / 2 && labelAngle < 3 * Math.PI / 2) {
            ctx.textAlign = 'right';
            labelX = centerX + (labelOffset * Math.cos(labelAngle)) - 5;
        } else {
            ctx.textAlign = 'left';
            labelX = centerX + (labelOffset * Math.cos(labelAngle)) + 5;
        }
        
        if (Math.abs(Math.cos(labelAngle)) < 0.05) {
            ctx.textAlign = 'center';
            if (labelAngle < 0) {
                labelY = wheelCenterY + labelOffset * Math.sin(labelAngle) - (lineHeight/2);
            } else {
                labelY = wheelCenterY + labelOffset * Math.sin(labelAngle) + (lineHeight/2);
            }
        }

        if (Math.abs(Math.sin(labelAngle)) < 0.05) {
            ctx.textBaseline = 'middle';
        } else if (labelAngle > -Math.PI/2 && labelAngle < Math.PI/2) {
            ctx.textBaseline = 'middle';
        } else {
            ctx.textBaseline = 'middle';
        }
        
        wrapText(ctx, categoriesData[i].label, labelX, labelY, maxLabelWidth, lineHeight);
    }

    // Draw the center circle (0 point)
    ctx.beginPath();
    ctx.arc(centerX, wheelCenterY, 1, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();

    // Diagram Title
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 24px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const titleY = contentPadding / 2;
    ctx.fillText(title, centerX, titleY);
}

// Helper function to convert hex color to rgba (for fill opacity)
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}


// Function to export canvas as image
function exportCanvasAsImage() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${diagramTitleInput.value.replace(/\s+/g, '_')}_BalanceWheel.png`;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event Listeners
numSpokesSelect.addEventListener('change', generateCategoryInputs);
generateWheelBtn.addEventListener('click', drawBalanceWheel);
exportImageBtn.addEventListener('click', exportCanvasAsImage);

// Event listener for the new checkbox
useSingleColorCheckbox.addEventListener('change', () => {
    const isChecked = useSingleColorCheckbox.checked;
    masterColorInput.disabled = !isChecked; // Enable/disable master color picker
    
    // Enable/disable individual color pickers
    categoriesData.forEach((_, index) => {
        const colorInput = document.getElementById(`category${index + 1}Color`);
        if (colorInput) {
            colorInput.disabled = isChecked;
        }
    });
    drawBalanceWheel(); // Redraw with new color mode
});

masterColorInput.addEventListener('change', () => {
    if (useSingleColorCheckbox.checked) {
        // If single color mode is active, redraw when master color changes
        drawBalanceWheel();
    }
});


// Initial setup
generateCategoryInputs();
drawBalanceWheel(); // Draw initial wheel
window.addEventListener('resize', () => {
    // Re-evaluate canvas size and redraw on resize
    const newSize = Math.min(window.innerWidth * 0.45, 600);
    canvas.width = newSize;
    canvas.height = newSize;
    drawBalanceWheel();
});
