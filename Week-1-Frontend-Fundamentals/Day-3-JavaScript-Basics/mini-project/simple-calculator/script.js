// Get input elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result");
const errorMessage = document.getElementById("error-message");

// Get numbers from input fields
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    return { num1, num2 };
}

// Validate inputs
function validateInputs(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        showError("Please enter valid numbers!");
        return false;
    }
    return true;
}

// Display error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
    resultDisplay.textContent = "-";
}

// Clear error message
function clearError() {
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
}

// Addition
function add() {
    const { num1, num2 } = getNumbers();

    if (!validateInputs(num1, num2)) {
        return;
    }

    clearError();
    const result = num1 + num2;
    resultDisplay.textContent = result;
    console.log(num1 + " + " + num2 + " = " + result);
}

// Subtraction
function subtract() {
    const { num1, num2 } = getNumbers();

    if (!validateInputs(num1, num2)) {
        return;
    }

    clearError();
    const result = num1 - num2;
    resultDisplay.textContent = result;
    console.log(num1 + " - " + num2 + " = " + result);
}

// Multiplication
function multiply() {
    const { num1, num2 } = getNumbers();

    if (!validateInputs(num1, num2)) {
        return;
    }

    clearError();
    const result = num1 * num2;
    resultDisplay.textContent = result;
    console.log(num1 + " * " + num2 + " = " + result);
}

// Division
function divide() {
    const { num1, num2 } = getNumbers();

    if (!validateInputs(num1, num2)) {
        return;
    }

    if (num2 === 0) {
        showError("Cannot divide by zero!");
        return;
    }

    clearError();
    const result = num1 / num2;
    resultDisplay.textContent = result.toFixed(2);
    console.log(num1 + " / " + num2 + " = " + result);
}

// Clear all
function clearAll() {
    num1Input.value = "";
    num2Input.value = "";
    resultDisplay.textContent = "-";
    clearError();
    console.log("Calculator cleared");
}
