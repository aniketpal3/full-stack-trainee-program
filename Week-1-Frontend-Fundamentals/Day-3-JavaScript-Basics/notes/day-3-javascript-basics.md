# Day 3 – JavaScript Basics: Variables, Data Types, Operators, and Functions

## 📚 Learning Objectives

By the end of Day 3, you will:

1. ✅ Understand what JavaScript is and why it's important
2. ✅ Learn three ways to include JavaScript in HTML
3. ✅ Work with variables (`var`, `let`, `const`)
4. ✅ Understand all primitive data types
5. ✅ Use operators (arithmetic, assignment, comparison, logical)
6. ✅ Write and call functions
7. ✅ Learn function declarations, expressions, and arrow functions
8. ✅ Manipulate the DOM (Document Object Model)
9. ✅ Add interactivity to websites
10. ✅ Build a simple calculator

---

## 🌐 Introduction to JavaScript

### What is JavaScript?

**JavaScript** = Programming language for the web

- Runs in browsers (client-side)
- Adds interactivity to websites
- Used with HTML and CSS
- Most popular programming language

### JavaScript's Role

```
HTML     → Structure (What content?)
CSS      → Styling (How does it look?)
JavaScript → Behavior (What happens when user interacts?)
```

### Why JavaScript?

✅ **Interactivity** - Respond to user actions (clicks, typing)  
✅ **Real-time** - Update page without reloading  
✅ **Validation** - Check form data before sending  
✅ **Animations** - Move elements smoothly  
✅ **DOM Manipulation** - Change HTML/CSS dynamically  
✅ **Everywhere** - Frontend, backend (Node.js), mobile apps  

---

## 💻 Three Ways to Add JavaScript

### Method 1: Inline JavaScript

JavaScript directly in HTML attribute

```html
<button onclick="alert('Hello!')">Click Me</button>
```

**Pros:** Quick testing  
**Cons:** Hard to maintain, not reusable  
**❌ Not recommended**

---

### Method 2: Internal JavaScript

JavaScript in `<script>` tag in HTML

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        console.log("Hello from internal JavaScript!");
    </script>
</head>
<body>
    <h1>My Page</h1>
</body>
</html>
```

**Pros:** All in one file  
**Cons:** Not reusable across pages  
**⚠️ Okay for practice, not ideal for production**

---

### Method 3: External JavaScript

JavaScript in separate `.js` file (BEST)

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <script src="script.js"></script>
</head>
<body>
    <h1>My Page</h1>
</body>
</html>
```

```javascript
// script.js
console.log("Hello from external JavaScript!");
```

**Pros:** ✅ Reusable, organized, maintainable  
**Cons:** Extra HTTP request  
**✅ RECOMMENDED FOR ALL PROJECTS**

---

## 🖨️ console.log()

Used to print messages to browser console

```javascript
console.log("Hello World!");
console.log(42);
console.log(true);
```

### How to View Console

```
Chrome: Press F12 → Click "Console" tab
Firefox: Press F12 → Click "Console" tab
Edge: Press F12 → Click "Console" tab
```

### Why Use console.log()?

✅ Debug code  
✅ Print variable values  
✅ Test code logic  
✅ See error messages  

---

## 🔧 Variables

Variables are containers for storing data values

### Declaring Variables

```javascript
var name = "Aniket";
let age = 20;
const country = "India";
```

### var (Avoid This)

Old way of declaring variables

```javascript
var x = 10;
var x = 20;  // Can redeclare (confusing!)
x = 30;      // Can reassign
```

**Problems:** Can be redeclared, function-scoped, causes bugs  
**❌ Avoid in modern JavaScript**

---

### let (Modern & Recommended)

```javascript
let x = 10;
// let x = 20;  // ERROR: Cannot redeclare!
x = 30;         // OK: Can reassign
```

**Advantages:**
✅ Block-scoped (safer)  
✅ Cannot redeclare  
✅ Can reassign  

---

### const (Most Recommended)

```javascript
const PI = 3.14159;
// PI = 3.14;  // ERROR: Cannot reassign!
```

**Advantages:**
✅ Block-scoped  
✅ Cannot redeclare  
✅ Cannot reassign  
✅ Clear intent: this value won't change  

### When to Use?

```javascript
const name = "Aniket";      // Won't change → use const
let score = 0;              // Will change → use let
let userAge = 20;           // Will change → use let
const birthYear = 2006;     // Won't change → use const
```

**Rule:** Use `const` by default, `let` when you need to reassign, never `var`

---

## 📊 Primitive Data Types

### String

Text data, enclosed in quotes

```javascript
let name = "Aniket";           // Double quotes
let city = 'Delhi';            // Single quotes
let message = `Hello ${name}`; // Backticks (template literals)

console.log(name);            // "Aniket"
console.log(typeof name);     // "string"
```

**String Operations:**

```javascript
let str = "Hello";
console.log(str.length);              // 5
console.log(str.toUpperCase());       // "HELLO"
console.log(str.toLowerCase());       // "hello"
console.log(str.charAt(0));           // "H"
```

---

### Number

Numeric data (integers and decimals)

```javascript
let age = 20;              // Integer
let height = 5.8;          // Decimal (Float)
let temperature = -15;     // Negative
let infinity = Infinity;   // Special value

console.log(age);          // 20
console.log(typeof age);   // "number"
```

**Number Operations:**

```javascript
console.log(10 + 5);       // 15
console.log(10 - 5);       // 5
console.log(10 * 5);       // 50
console.log(10 / 5);       // 2
console.log(10 % 3);       // 1 (remainder)
```

---

### Boolean

True or false value

```javascript
let isStudent = true;
let isGraduated = false;

console.log(isStudent);    // true
console.log(typeof isStudent); // "boolean"
```

**Used in Conditions:**

```javascript
if (isStudent === true) {
    console.log("You are a student");
}
```

---

### Null

Intentional absence of value

```javascript
let x = null;  // Variable explicitly set to empty
console.log(x);        // null
console.log(typeof x); // "object" (quirk of JavaScript!)
```

**Common Use:** Clearing a variable

```javascript
let data = "some value";
data = null;  // Clear the data
```

---

### Undefined

Variable declared but not assigned

```javascript
let y;
console.log(y);        // undefined
console.log(typeof y); // "undefined"
```

**Difference from Null:**

| Type | Meaning | Set By |
|---|---|---|
| `null` | Intentionally empty | Programmer |
| `undefined` | Not assigned yet | JavaScript |

---

### typeof Operator

Check data type

```javascript
console.log(typeof "Hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug in JavaScript!)
```

---

## ➕ Operators

### Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7  (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1 (Modulus - remainder)
console.log(a ** b);  // 1000 (Exponent)
```

### Assignment Operators

```javascript
let x = 5;

x = 10;       // x = 10 (Assignment)
x += 5;       // x = 15 (Add and assign)
x -= 3;       // x = 12 (Subtract and assign)
x *= 2;       // x = 24 (Multiply and assign)
x /= 4;       // x = 6 (Divide and assign)
x %= 2;       // x = 0 (Modulus and assign)
```

### Comparison Operators

```javascript
let a = 10;
let b = 20;

console.log(a == b);   // false (Equal value)
console.log(a != b);   // true  (Not equal)
console.log(a < b);    // true  (Less than)
console.log(a > b);    // false (Greater than)
console.log(a <= b);   // true  (Less than or equal)
console.log(a >= b);   // false (Greater than or equal)
console.log(a === b);  // false (Strict equal - same value AND type)
console.log(a !== b);  // true  (Strict not equal)
```

**Important:** Use `===` instead of `==`

```javascript
console.log(5 == "5");   // true (type coercion - avoid!)
console.log(5 === "5");  // false (strict - CORRECT)
```

### Logical Operators

```javascript
let age = 20;
let hasLicense = true;

// AND - both must be true
console.log(age >= 18 && hasLicense === true);  // true

// OR - at least one must be true
console.log(age < 18 || hasLicense === true);   // true

// NOT - reverses the result
console.log(!(age < 18));                       // true
```

**Truth Table:**

```
AND (&&)
true  && true  = true
true  && false = false
false && true  = false
false && false = false

OR (||)
true  || true  = true
true  || false = true
false || true  = true
false || false = false

NOT (!)
!true  = false
!false = true
```

---

## 🎯 Functions

Functions are reusable blocks of code

### Function Declaration

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Aniket");     // Output: "Hello, Aniket"
greet("John");       // Output: "Hello, John"
```

**Structure:**

```
function greet(name) {
  ↑         ↑     ↑
keyword  name parameters
        function
```

---

### Function with Return

```javascript
function add(a, b) {
    let sum = a + b;
    return sum;
}

let result = add(5, 3);
console.log(result);  // 8
```

**Return:** Exits function and sends value back

---

### Function Expression

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));  // 20
```

---

### Arrow Function (Modern)

```javascript
const square = (x) => {
    return x * x;
};

console.log(square(5));  // 25

// Shorthand (single line)
const double = (x) => x * 2;
console.log(double(5));  // 10
```

**Arrow Function Syntax:**

```javascript
// Full syntax
const func = (param) => {
    return param * 2;
};

// Short syntax (single line, no braces)
const func = (param) => param * 2;

// No parameters
const greet = () => "Hello!";

// One parameter (parentheses optional)
const square = x => x * x;
```

---

## 🖱️ DOM Manipulation

### Accessing HTML Elements

```javascript
// By ID
let element = document.getElementById("myId");

// By class name
let elements = document.getElementsByClassName("myClass");

// By tag name
let paragraphs = document.getElementsByTagName("p");

// Modern way (CSS selector)
let element = document.querySelector("#myId");
let element = document.querySelector(".myClass");
```

### Changing Text

```html
<h1 id="title">Old Text</h1>
<script>
    let titleElement = document.getElementById("title");
    titleElement.textContent = "New Text";  // Changes text
</script>
```

### Changing HTML

```html
<div id="content">Old content</div>
<script>
    document.getElementById("content").innerHTML = "<p>New HTML content</p>";
</script>
```

**Difference:**

```javascript
element.textContent = "Text only";  // Safe, only text
element.innerHTML = "<b>Bold</b>";  // Can include HTML
```

### Changing Styles

```javascript
let box = document.getElementById("myBox");
box.style.color = "red";
box.style.backgroundColor = "yellow";
box.style.fontSize = "20px";
```

---

## 🎨 Handling User Input

### Text Input

```html
<input type="text" id="userInput" placeholder="Enter name">
<button onclick="displayName()">Click Me</button>

<script>
    function displayName() {
        let input = document.getElementById("userInput");
        let name = input.value;  // Get value from input
        alert("Hello, " + name);
    }
</script>
```

### Form Example

```html
<form>
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="Email">
    <button type="button" onclick="submitForm()">Submit</button>
</form>

<script>
    function submitForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        console.log("Name: " + name);
        console.log("Email: " + email);
    }
</script>
```

---

## 📋 Day 3 Recap

### Key Concepts Learned

✅ JavaScript basics and role in web development  
✅ Three ways to add JavaScript (inline, internal, external)  
✅ Variables with `let` and `const`  
✅ Five primitive data types (string, number, boolean, null, undefined)  
✅ Operators (arithmetic, assignment, comparison, logical)  
✅ Functions (declarations, expressions, arrow functions)  
✅ DOM manipulation (accessing elements, changing content)  
✅ User input handling  

### Quick Reference

```javascript
// Variables
const name = "Aniket";
let age = 20;

// Data types
typeof "text";      // string
typeof 42;          // number
typeof true;        // boolean
typeof undefined;   // undefined
typeof null;        // object (quirk!)

// Operators
10 + 5;             // 15
10 > 5;             // true
true && false;      // false

// Functions
function greet(name) {
    return "Hello, " + name;
}

// Arrow function
const add = (a, b) => a + b;

// DOM
document.getElementById("id").textContent = "New text";
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Using `var`

```javascript
// ❌ Wrong
var x = 10;

// ✅ Correct
let x = 10;
const y = 20;
```

### Mistake 2: Using `==` instead of `===`

```javascript
// ❌ Wrong
if (x == 5) { }

// ✅ Correct
if (x === 5) { }
```

### Mistake 3: Forgetting `return`

```javascript
// ❌ Wrong
function add(a, b) {
    a + b;  // This doesn't return!
}

// ✅ Correct
function add(a, b) {
    return a + b;
}
```

### Mistake 4: Not Using Parentheses for Functions

```javascript
// ❌ Wrong
let result = add(5, 3);  // Forgot parentheses
// (same as calling the function)

// ✅ Correct
let result = add(5, 3);  // Parentheses call the function
```

### Mistake 5: Confusing `textContent` and `innerHTML`

```javascript
// ❌ If you only want text:
element.innerHTML = "Text";  // Works but risky

// ✅ Better:
element.textContent = "Text";  // Safe and clear
```

---

## 🚀 What's Next?

After Day 3, you can:

✅ Write basic JavaScript programs  
✅ Manipulate web pages dynamically  
✅ Handle user input  
✅ Build interactive websites  
✅ Create simple calculators and games  

### Day 4: Control Structures

You'll learn:
- if/else statements
- switch statements
- Loops (for, while, do-while)
- Break and continue

### Day 5: Functions & Scope

You'll learn:
- Variable scope
- Function scope
- Closures
- Advanced function concepts

---

## 📚 Resources

- **MDN JavaScript Guide:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **W3Schools JavaScript:** https://www.w3schools.com/js/
- **JavaScript.info:** https://javascript.info/
- **FreeCodeCamp:** https://www.freecodecamp.org/

---

**Happy coding! You're learning JavaScript! 🎉**
