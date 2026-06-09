# Practice Task 3: Variables and Constants

## 📌 Objective

Understand the difference between `let`, `const`, and `var`.

## ⏱️ Estimated Time

**15-20 minutes**

## 🎯 Key Concepts

✅ Variable declaration with `let`  
✅ Constant declaration with `const`  
✅ Old `var` keyword (avoid)  
✅ Reassignment rules  
✅ Template literals (backticks)  

## 🛠️ Key Code

```javascript
let city = "Delhi";      // Can reassign
const country = "India"; // Cannot reassign
var age = 22;            // Avoid this

// Display values
console.log(city);       // Print to console
document.getElementById("output").innerHTML = "..."; // Display on page
```

## ✅ Testing

1. Open page in browser
2. Press F12 → Console tab
3. Should see three values printed
4. Page should also display the values
5. Notice summary about let, const, var

## 💡 When to Use

**Use `const` by default:**
```javascript
const name = "Aniket";  // Won't change
```

**Use `let` when reassigning:**
```javascript
let score = 0;
score = 100;  // Reassigning
```

**Never use `var`:**
```javascript
// ❌ Don't
var x = 5;

// ✅ Do
let x = 5;
```

---

**Mastering variables is fundamental to JavaScript! 🎉**
