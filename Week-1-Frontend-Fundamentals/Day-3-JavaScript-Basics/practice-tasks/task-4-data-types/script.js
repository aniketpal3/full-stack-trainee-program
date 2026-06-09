// Task 4: Data Types

// Primitive data types
const myString = "Hello World";
const myNumber = 42;
const myDecimal = 3.14;
const myBoolean = true;
const myNull = null;
let myUndefined;  // Not assigned

// Check types using typeof
console.log("String: " + myString + " (type: " + typeof myString + ")");
console.log("Number: " + myNumber + " (type: " + typeof myNumber + ")");
console.log("Decimal: " + myDecimal + " (type: " + typeof myDecimal + ")");
console.log("Boolean: " + myBoolean + " (type: " + typeof myBoolean + ")");
console.log("Null: " + myNull + " (type: " + typeof myNull + ")");
console.log("Undefined: " + myUndefined + " (type: " + typeof myUndefined + ")");

// Display on page
let output = document.getElementById("output");
output.innerHTML = `
    <h2>Data Types in JavaScript</h2>
    <table border="1" style="padding: 10px;">
        <tr>
            <th>Value</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>${myString}</td>
            <td>${typeof myString}</td>
            <td>Text data</td>
        </tr>
        <tr>
            <td>${myNumber}</td>
            <td>${typeof myNumber}</td>
            <td>Integer number</td>
        </tr>
        <tr>
            <td>${myDecimal}</td>
            <td>${typeof myDecimal}</td>
            <td>Decimal number</td>
        </tr>
        <tr>
            <td>${myBoolean}</td>
            <td>${typeof myBoolean}</td>
            <td>Boolean true/false</td>
        </tr>
        <tr>
            <td>${myNull}</td>
            <td>${typeof myNull}</td>
            <td>Intentional null (quirk: shows 'object')</td>
        </tr>
        <tr>
            <td>${myUndefined}</td>
            <td>${typeof myUndefined}</td>
            <td>Undefined variable</td>
        </tr>
    </table>
`;
