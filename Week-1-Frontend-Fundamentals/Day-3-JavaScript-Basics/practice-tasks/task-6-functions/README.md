# Practice Task 6: Functions

## 📌 Objective

Learn how to write and use functions in JavaScript. Understand function declaration, expression, arrow functions, and parameters.

## ⏱️ Estimated Time

**20-25 minutes**

## 🎯 Three Ways to Define Functions

| Type | Syntax | When to Use |
|---|---|---|
| **Declaration** | `function name() { }` | Standard, hoisted, most common |
| **Expression** | `const name = function() { }` | Anonymous functions, storing in variables |
| **Arrow** | `const name = () => { }` | Modern, concise, implicit return possible |

## 🛠️ Key Code

### Function Declaration
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

greet("Alice");  // "Hello, Alice!"
```

### Function Expression
```javascript
const add = function(x, y) {
    return x + y;
};

add(5, 3);  // 8
```

### Arrow Function
```javascript
const multiply = (a, b) => {
    return a * b;
};

multiply(4, 5);  // 20

// Shorthand (single line)
const divide = (a, b) => a / b;
```

### Default Parameters
```javascript
const power = (num, exp = 2) => {
    return Math.pow(num, exp);
};

power(2);      // 4 (uses default exp=2)
power(2, 3);   // 8 (uses given exp=3)
```

## ✅ Testing

1. Open `index.html` in browser
2. Press F12 → Console tab
3. Should see all function results in console
4. Page displays:
   - Greeting examples (Declaration)
   - Addition results (Expression)
   - Multiplication results (Arrow)
   - Area calculations
   - Power function with default parameters

## 💡 Key Points

- Functions are reusable blocks of code
- Parameters allow functions to work with different values
- `return` sends a value back from the function
- Arrow functions are modern and concise
- Default parameters provide fallback values
- Functions help organize and reduce code repetition

## 🚀 Challenges

1. Create a function that converts temperature from Celsius to Fahrenheit: `(C × 9/5) + 32`
2. Create a function that checks if a number is even or odd
3. Create a function with 3 parameters that calculates the average of three numbers

---

**Functions are the building blocks of JavaScript programming! 🎉**
