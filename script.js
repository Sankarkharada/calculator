// script.js
let isDegree = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
        if (display.innerText === 'Infinity' || display.innerText === '-Infinity') {
            display.innerText = 'Error';
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}

function appendFunction(func) {
    const display = document.getElementById('display');
    switch (func) {
        case 'sqrt':
            display.innerText = Math.sqrt(parseExpression(display.innerText));
            break;
        case 'pow':
            display.innerText += '**';
            break;
        case 'sin':
        case 'cos':
        case 'tan':
        case 'sec':
        case 'cosec':
        case 'cot':
            display.innerText = `${func}(${display.innerText})`;
            break;
    }
}

function parseExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

function toggleDegrees() {
    isDegree = !isDegree;
    const display = document.getElementById('display');
    display.innerText += isDegree ? ' (Deg)' : ' (Rad)';
}

function calculateTrigonometric(func, value) {
    if (isDegree) {
        value = value * (Math.PI / 180);
    }
    switch (func) {
        case 'sin':
            return Math.sin(value);
        case 'cos':
            return Math.cos(value);
        case 'tan':
            return Math.tan(value);
        case 'sec':
            return 1 / Math.cos(value);
        case 'cosec':
            return 1 / Math.sin(value);
        case 'cot':
            return 1 / Math.tan(value);
    }
}
