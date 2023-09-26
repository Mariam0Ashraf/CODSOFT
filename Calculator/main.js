let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;
let parenthesesOpen = false;

function addToResult(value) {
    if (resultDisplayed) {
        clearResult();
    }
    if (value === '(' && !parenthesesOpen) {
        currentInput += value;
        parenthesesOpen = true;
    } else if (value === ')' && parenthesesOpen) {
        currentInput += value;
        parenthesesOpen = false;
    } else if (value !== '(' && value !== ')' && value !== '=') {
        currentInput += value;
    }
    updateDisplay(currentInput);
}

function clearResult() {
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
    parenthesesOpen = false;
    updateDisplay('');
}

function calculateResult() {
    if (currentInput === '') {
        return;
    }
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        resultDisplayed = true;
        updateDisplay(currentInput);
    } catch (error) {
        currentInput = 'Error';
        resultDisplayed = true;
        updateDisplay(currentInput);
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function toggleParentheses() {
    if (!parenthesesOpen) {
        addToResult('(');
    } else {
        addToResult(')');
    }
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
}
