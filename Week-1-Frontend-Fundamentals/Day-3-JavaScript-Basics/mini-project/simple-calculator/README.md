# Mini Project: Simple Calculator

## 📌 Objective

Build a working calculator that performs basic arithmetic operations. Practice functions, input handling, validation, and DOM manipulation.

## ⏱️ Estimated Time

**30-40 minutes**

## 🎯 Features

✅ Add two numbers
✅ Subtract two numbers
✅ Multiply two numbers
✅ Divide two numbers (with zero-division check)
✅ Input validation
✅ Clear button
✅ Error message display
✅ Responsive design

## 🛠️ Key Functions

```javascript
// Get numbers from inputs
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    return { num1, num2 };
}

// Validate inputs
function validateInputs(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        showError("Please enter valid numbers!");
        return false;
    }
    return true;
}

// Addition function
function add() {
    const { num1, num2 } = getNumbers();
    if (!validateInputs(num1, num2)) return;
    clearError();
    const result = num1 + num2;
    resultDisplay.textContent = result;
}

// Division with zero-check
function divide() {
    const { num1, num2 } = getNumbers();
    if (!validateInputs(num1, num2)) return;
    
    if (num2 === 0) {
        showError("Cannot divide by zero!");
        return;
    }
    
    const result = num1 / num2;
    resultDisplay.textContent = result.toFixed(2);
}
```

## ✅ Testing

1. Open `index.html` in browser
2. Enter two numbers in the input fields
3. Click an operation button (Add, Subtract, Multiply, Divide)
4. Result displays in the result box
5. Test error cases:
   - Leave input blank and click button → shows "Please enter valid numbers!"
   - Divide by zero → shows "Cannot divide by zero!"
6. Click Clear to reset calculator
7. Check console (F12) to see operation logs

## 📋 Expected Output Examples

| First # | Second # | Operation | Result |
|---------|----------|-----------|--------|
| 10 | 5 | Add | 15 |
| 10 | 5 | Subtract | 5 |
| 10 | 5 | Multiply | 50 |
| 10 | 5 | Divide | 2.00 |
| 10 | 0 | Divide | Error: Cannot divide by zero! |

## 🚀 Challenges

1. **Add More Operations**: Add power (exponentiation), modulo (remainder), square root
2. **Display History**: Show last 5 calculations in a list
3. **Keyboard Support**: Press Enter to calculate instead of clicking button
4. **Styling**: Change colors or add a dark mode toggle
5. **Memory Functions**: Add M+ (memory add), M- (memory subtract), MR (memory recall) buttons

## 💡 Concepts Practiced

- Functions with parameters
- Input validation (`isNaN()`, `parseFloat()`)
- Error handling (division by zero)
- DOM manipulation (getting/updating elements)
- Event handling (onclick buttons)
- Conditional logic (if statements)
- Object destructuring (`{ num1, num2 }`)
- Template literals for display
- Console logging for debugging

---

**Great job building your first mini project! 🎉**
