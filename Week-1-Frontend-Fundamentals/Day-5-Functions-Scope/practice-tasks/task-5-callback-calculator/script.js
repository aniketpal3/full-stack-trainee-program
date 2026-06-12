function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

let num1 = 20;
let num2 = 5;

let addResult = calculate(num1, num2, add);
let subtractResult = calculate(num1, num2, subtract);
let multiplyResult = calculate(num1, num2, multiply);

document.getElementById("output").innerHTML = `
  ${num1} + ${num2} = ${addResult}<br>
  ${num1} - ${num2} = ${subtractResult}<br>
  ${num1} × ${num2} = ${multiplyResult}
`;

console.log("Addition:", addResult);
console.log("Subtraction:", subtractResult);
console.log("Multiplication:", multiplyResult);