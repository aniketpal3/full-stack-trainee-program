# Assignment: JavaScript Basic Programs

## 📌 Objective

Build four independent JavaScript programs that demonstrate understanding of functions, conditionals, loops, and input validation. This assignment tests your ability to apply JavaScript fundamentals to solve real problems.

## ⏱️ Estimated Time

**60-90 minutes**

## 🎯 Four Programs to Build

### Program 1: Number Sign Check
**Objective**: Determine if a number is positive, negative, or zero

**Logic**:
- Get number from user input
- If number > 0: "Positive"
- If number < 0: "Negative"
- If number = 0: "Zero"
- Display result on page

```javascript
function checkSign() {
    const num = parseFloat(document.getElementById("num1").value);
    
    if (isNaN(num)) {
        // Show error
        return;
    }
    
    let sign;
    if (num > 0) {
        sign = "Positive";
    } else if (num < 0) {
        sign = "Negative";
    } else {
        sign = "Zero";
    }
    
    // Display result
}
```

### Program 2: Maximum of Three Numbers
**Objective**: Find the largest of three numbers

**Logic**:
- Get three numbers from user inputs
- Compare all three to find maximum
- Display the maximum value

```javascript
function findMax() {
    const num1 = parseFloat(document.getElementById("max1").value);
    const num2 = parseFloat(document.getElementById("max2").value);
    const num3 = parseFloat(document.getElementById("max3").value);
    
    // Validate all inputs
    // Find and display maximum
}
```

### Program 3: Multiplication Table
**Objective**: Generate multiplication table for a given number

**Logic**:
- Get number from user input
- Loop from 1 to 10
- Calculate: number × i for each i
- Display all results

```javascript
function multiplicationTable() {
    const num = parseInt(document.getElementById("table").value);
    
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += num + " × " + i + " = " + (num * i) + "<br>";
    }
    
    // Display table
}
```

### Program 4: Even or Odd Checker
**Objective**: Determine if a number is even or odd

**Logic**:
- Get number from user input
- Use modulo operator (%)
- If number % 2 === 0: "Even"
- Else: "Odd"
- Display result

```javascript
function checkEvenOdd() {
    const num = parseInt(document.getElementById("evenOdd").value);
    
    let type;
    if (num % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }
    
    // Display result
}
```

## ✅ Testing Checklist

- [ ] Program 1: Test with positive, negative, and zero values
- [ ] Program 1: Test with invalid input (show error)
- [ ] Program 2: Test with all different numbers
- [ ] Program 2: Test when numbers are equal
- [ ] Program 2: Test with negative numbers
- [ ] Program 3: Test multiplication table generation
- [ ] Program 3: Test that all 10 lines display
- [ ] Program 4: Test even numbers (2, 4, 10, etc.)
- [ ] Program 4: Test odd numbers (1, 3, 7, etc.)
- [ ] All programs: Test with empty inputs (show error)
- [ ] All programs: Check console.log output (F12 → Console)

## 📋 Test Cases

| Program | Input | Expected Output |
|---------|-------|-----------------|
| Sign Check | 5 | "5 is Positive" |
| Sign Check | -3 | "-3 is Negative" |
| Sign Check | 0 | "0 is Zero" |
| Max of Three | 5, 3, 8 | "Maximum is 8" |
| Max of Three | 10, 10, 5 | "Maximum is 10" |
| Multiplication | 5 | 5×1=5, 5×2=10, ..., 5×10=50 |
| Multiplication | 3 | 3×1=3, 3×2=6, ..., 3×10=30 |
| Even/Odd | 4 | "4 is Even" |
| Even/Odd | 7 | "7 is Odd" |

## 🚀 Challenge Extensions

1. **Add More Operations**: Create a program that checks if a number is:
   - Prime (divisible only by 1 and itself)
   - Perfect square (4, 9, 16, etc.)
   - Palindrome (reads same forwards and backwards)

2. **Combine Programs**: Create a "Math Quiz" that randomly selects one of the four programs

3. **Add Timer**: Time how long it takes user to complete all four programs

4. **Score System**: Give points for each correct answer, display total score

5. **Data Validation**: Add more error checking (non-numeric input, extremely large numbers, etc.)

## 💡 Concepts Tested

✓ Functions with parameters
✓ Conditional statements (if/else/else if)
✓ For loops (multiplication table)
✓ Input validation (isNaN, parseInt, parseFloat)
✓ Comparison operators (>, <, ===)
✓ Arithmetic operators (+, -, *, /, %)
✓ DOM manipulation (getElementById, textContent, innerHTML)
✓ Event handling (onclick)
✓ Console logging for debugging

## 📝 Submission Requirements

1. All four programs must work correctly
2. Input validation for all programs
3. Results display on page (not just console)
4. Code must be commented
5. No JavaScript errors in console
6. Must test all edge cases

---

**Complete this assignment to solidify your JavaScript fundamentals! 💪**
