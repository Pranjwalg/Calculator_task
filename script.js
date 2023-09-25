let result = document.getElementById('result');
let currentResult = '';

function appendNumber(number) {
    currentResult += number;
    result.value = currentResult;
}

function setOperator(operator) {
    currentResult += operator;
    result.value = currentResult;
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        result.value = currentResult;
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    currentResult = '';
    result.value = '';
}
