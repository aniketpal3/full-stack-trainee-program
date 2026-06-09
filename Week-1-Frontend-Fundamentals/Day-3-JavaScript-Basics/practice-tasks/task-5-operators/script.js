// Task 5: Operators

// Arithmetic operators
const a = 10;
const b = 3;

console.log("--- ARITHMETIC OPERATORS ---");
console.log(a + " + " + b + " = " + (a + b));
console.log(a + " - " + b + " = " + (a - b));
console.log(a + " * " + b + " = " + (a * b));
console.log(a + " / " + b + " = " + (a / b));
console.log(a + " % " + b + " = " + (a % b));

// Comparison operators
console.log("--- COMPARISON OPERATORS ---");
console.log(a + " == " + b + ": " + (a == b));
console.log(a + " != " + b + ": " + (a != b));
console.log(a + " > " + b + ": " + (a > b));
console.log(a + " < " + b + ": " + (a < b));
console.log(a + " >= " + b + ": " + (a >= b));
console.log(a + " <= " + b + ": " + (a <= b));

// Logical operators
console.log("--- LOGICAL OPERATORS ---");
console.log("true && false: " + (true && false));
console.log("true || false: " + (true || false));
console.log("!true: " + (!true));

// Age check (adult or not)
const age = 20;
console.log("--- AGE CHECK ---");
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

// Display on page
let output = document.getElementById("output");
output.innerHTML = `
    <h2>Arithmetic Operators</h2>
    <p>${a} + ${b} = ${a + b}</p>
    <p>${a} - ${b} = ${a - b}</p>
    <p>${a} * ${b} = ${a * b}</p>
    <p>${a} / ${b} = ${(a / b).toFixed(2)}</p>
    <p>${a} % ${b} = ${a % b}</p>

    <h2>Comparison Operators</h2>
    <p>${a} > ${b}: ${a > b}</p>
    <p>${a} < ${b}: ${a < b}</p>
    <p>${a} >= ${b}: ${a >= b}</p>

    <h2>Logical Operators</h2>
    <p>true && false = ${true && false}</p>
    <p>true || false = ${true || false}</p>
    <p>!true = ${!true}</p>

    <h2>Age Check (${age} years old)</h2>
    <p><strong>${age >= 18 ? 'Adult' : 'Not Adult'}</strong></p>
`;
