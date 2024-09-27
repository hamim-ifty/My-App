let displayValue = '';
let lastOperator = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    if (['+', '-', '*', '/'].includes(lastOperator)) {
        displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    lastOperator = operator;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
    lastOperator = '';
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
