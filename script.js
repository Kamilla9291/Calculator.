const result = document.getElementById('result');

function append(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function negate() {
    result.value = eval(result.value) * -1;
}

function calculate() {
    try{
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

