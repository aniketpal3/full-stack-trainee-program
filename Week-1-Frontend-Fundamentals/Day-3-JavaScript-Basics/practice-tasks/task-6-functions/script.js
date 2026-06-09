// Task 6: Functions

// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log("--- FUNCTION DECLARATION ---");
console.log(greet("Alice"));
console.log(greet("Bob"));

// 2. Function Expression
const add = function(x, y) {
    return x + y;
};

console.log("--- FUNCTION EXPRESSION ---");
console.log("5 + 3 = " + add(5, 3));
console.log("10 + 20 = " + add(10, 20));

// 3. Arrow Function
const multiply = (a, b) => {
    return a * b;
};

console.log("--- ARROW FUNCTION ---");
console.log("4 * 5 = " + multiply(4, 5));
console.log("7 * 3 = " + multiply(7, 3));

// 4. Function with multiple parameters
const calculateArea = (length, width) => {
    return length * width;
};

console.log("--- CALCULATE AREA ---");
console.log("Area of 5 x 3: " + calculateArea(5, 3));

// 5. Function without return
function displayMessage(msg) {
    console.log("Message: " + msg);
}

displayMessage("Functions are reusable code!");

// 6. Function with default parameter
const power = (num, exp = 2) => {
    return Math.pow(num, exp);
};

console.log("--- POWER FUNCTION ---");
console.log("2^2 = " + power(2));
console.log("2^3 = " + power(2, 3));
console.log("5^2 = " + power(5));

// Display on page
let output = document.getElementById("output");
output.innerHTML = `
    <h2>Function Declaration</h2>
    <p><strong>greet("Alice"):</strong> ${greet("Alice")}</p>
    <p><strong>greet("Bob"):</strong> ${greet("Bob")}</p>

    <h2>Function Expression</h2>
    <p><strong>add(5, 3):</strong> ${add(5, 3)}</p>
    <p><strong>add(10, 20):</strong> ${add(10, 20)}</p>

    <h2>Arrow Function</h2>
    <p><strong>multiply(4, 5):</strong> ${multiply(4, 5)}</p>
    <p><strong>multiply(7, 3):</strong> ${multiply(7, 3)}</p>

    <h2>Calculate Area</h2>
    <p><strong>calculateArea(5, 3):</strong> ${calculateArea(5, 3)} sq units</p>
    <p><strong>calculateArea(10, 8):</strong> ${calculateArea(10, 8)} sq units</p>

    <h2>Power Function (with default parameter)</h2>
    <p><strong>power(2) = power(2, 2):</strong> ${power(2)}</p>
    <p><strong>power(2, 3):</strong> ${power(2, 3)}</p>
    <p><strong>power(5):</strong> ${power(5)}</p>
`;
