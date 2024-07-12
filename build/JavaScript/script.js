let currentInput = "";
let operator = "";
let previousInput = "";

function addDigit(digit) {
    currentInput += digit;
    updateDisplay(currentInput);
    
}

function negativeDigit() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay(currentInput);
    }
}

function setOperator(op) {
    if (currentInput == ""){return;}
    if (previousInput!= ""){
        calculate();
    }   
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (previousInput == "" || currentInput == ""){return;}
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    console.log(previousInput)
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay("0");
}

function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}