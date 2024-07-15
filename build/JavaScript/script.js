let currentInput = "";
let operator = "";
let previousInput = "";

// function to ADD number
function addDigit(digit) {
    currentInput += digit;
    updateDisplay(currentInput);
    
}

// function to negative number (-)
function negativeDigit() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay(currentInput);
    }
}

// function tp Percent (%)
function setPercent() {
    if (currentInput == ""){return;}
    currentInput /= 100;   
    updateDisplay(currentInput);
}

// function to Operator
function setOperator(op) {
    if (currentInput == ""){return;}
    if (previousInput!= ""){
        calculate();
    }   
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// function to calculate the result
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
        default:
            return;
    }
    let number = Number(result.toFixed(3));
    currentInput = number.toString();
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}

// function to (AC)
function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay("0");
}

// function to print the result in HTML DIV
function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}