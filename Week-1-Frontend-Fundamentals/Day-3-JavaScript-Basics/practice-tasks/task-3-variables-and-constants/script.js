// Task 3: Variables and Constants

// Declare variables using let, const, and var
let city = "Delhi";        // let - can be reassigned
const country = "India";   // const - cannot be reassigned
var age = 22;              // var - old way (avoid)

// Print to console
console.log("City: " + city);
console.log("Country: " + country);
console.log("Age: " + age);

// Display on webpage
let output = document.getElementById("output");
output.innerHTML = `
    <p><strong>Variable city:</strong> ${city}</p>
    <p><strong>Constant country:</strong> ${country}</p>
    <p><strong>Variable age:</strong> ${age}</p>
    <hr>
    <p><strong>Summary:</strong></p>
    <ul>
        <li>let: Can be reassigned (use this)</li>
        <li>const: Cannot be reassigned (use this)</li>
        <li>var: Old way (avoid)</li>
    </ul>
`;
