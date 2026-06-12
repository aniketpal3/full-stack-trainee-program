let output = "";

// Global Scope
let globalName = "Aniket";

function showGlobalName() {
  output += `Global variable inside function: ${globalName}<br>`;
  console.log("Global variable:", globalName);
}

showGlobalName();

// Local Scope
function localScopeExample() {
  let localValue = 100;
  output += `Local variable inside function: ${localValue}<br>`;
  console.log("Local variable:", localValue);
}

localScopeExample();

// Block Scope
if (true) {
  let blockLet = "I am block scoped using let";
  const blockConst = "I am block scoped using const";

  output += `${blockLet}<br>`;
  output += `${blockConst}<br>`;
}

// var inside block
if (true) {
  var blockVar = "I am accessible outside block because I use var";
}

output += `${blockVar}<br>`;
console.log(blockVar);

// Hoisting with var
output += `Hoisted var value before declaration is undefined. Check console.<br>`;
console.log("Before declaration:", hoistedValue);

var hoistedValue = 50;

console.log("After declaration:", hoistedValue);

// Function Hoisting
hoistedFunction();

function hoistedFunction() {
  output += "Function declaration can be called before definition due to hoisting.<br>";
  console.log("Function hoisting works.");
}

document.getElementById("output").innerHTML = output;