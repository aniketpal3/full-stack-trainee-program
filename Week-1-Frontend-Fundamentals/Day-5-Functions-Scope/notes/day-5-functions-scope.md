# Day 5 – Functions in Depth & JavaScript Scope

## Learning Objectives

By the end of Day 5, students will:

- Understand functions in JavaScript.
- Learn parameters and return values.
- Learn function declaration, expression, and arrow functions.
- Understand scope in JavaScript.
- Learn hoisting.
- Understand anonymous functions and callbacks.
- Build a Simple To-Do List project.

---

# 1. What are Functions?

Functions are reusable blocks of code.

Instead of writing the same code again and again, we write a function and call it whenever needed.

Example:

```js
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

greet();
```

---

# Why Use Functions?

Functions help us:

- Reuse code
- Reduce repetition
- Organize programs
- Improve readability
- Make debugging easier

---

# 2. Function Parameters

Parameters allow data to be passed into a function.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Rahul");
greet("Aditi");
```

Output:

```txt
Hello Rahul
Hello Aditi
```

---

# 3. Return Values

Functions can return values.

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3);

console.log(result);
```

Output:

```txt
8
```

---

# 4. Default Parameters

```js
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
```

Output:

```txt
10
```

---

# 5. Function Declaration

```js
function greet() {
  console.log("Hello!");
}
```

---

# 6. Function Expression

```js
const greet = function () {
  console.log("Hi There!");
};
```

---

# 7. Arrow Function

```js
const greet = () => {
  console.log("Hey!");
};
```

---

# Short Arrow Function

```js
const square = x => x * x;

console.log(square(4));
```

Output:

```txt
16
```

---

# 8. Global Scope

Variables declared outside functions are global.

```js
let name = "Rahul";

function showName() {
  console.log(name);
}

showName();
```

---

# 9. Local Scope

Variables declared inside functions are local.

```js
function test() {
  let x = 10;

  console.log(x);
}

test();
```

---

# 10. Block Scope

Variables declared using let and const are block scoped.

```js
if (true) {
  let a = 5;
  const b = 10;
}
```

Outside the block they cannot be accessed.

---

# 11. Hoisting

Function declarations and var variables are hoisted.

```js
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

Works correctly.

---

# 12. Anonymous Functions

Functions without names.

```js
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

# 13. Callback Functions

A callback is a function passed as an argument.

```js
function processUser(callback) {
  callback("Aditi");
}

processUser(function(name) {
  console.log("Hello " + name);
});
```

---

# Recap

Today we learned:

- Functions
- Parameters
- Return Values
- Default Parameters
- Function Declaration
- Function Expression
- Arrow Functions
- Scope
- Hoisting
- Anonymous Functions
- Callback Functions

---

# Mini Project

Simple To-Do List using Functions