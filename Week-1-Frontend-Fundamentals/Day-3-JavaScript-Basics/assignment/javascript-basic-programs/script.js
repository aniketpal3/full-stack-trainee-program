// Program 1: Check if number is positive, negative, or zero
function checkSign() {
    const num = parseFloat(document.getElementById("num1").value);
    const resultBox = document.getElementById("result1");

    if (isNaN(num)) {
        resultBox.textContent = "⚠️ Please enter a valid number!";
        resultBox.classList.remove("result-success");
        resultBox.classList.add("show");
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

    resultBox.textContent = "✓ " + num + " is " + sign;
    resultBox.classList.add("result-success");
    resultBox.classList.add("show");
    console.log("Sign Check: " + num + " is " + sign);
}

// Program 2: Find maximum of three numbers
function findMax() {
    const num1 = parseFloat(document.getElementById("max1").value);
    const num2 = parseFloat(document.getElementById("max2").value);
    const num3 = parseFloat(document.getElementById("max3").value);
    const resultBox = document.getElementById("result2");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultBox.textContent = "⚠️ Please enter all three numbers!";
        resultBox.classList.remove("result-success");
        resultBox.classList.add("show");
        return;
    }

    let max;
    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }

    resultBox.textContent = "✓ Maximum of " + num1 + ", " + num2 + ", " + num3 + " is " + max;
    resultBox.classList.add("result-success");
    resultBox.classList.add("show");
    console.log("Max of three: " + num1 + ", " + num2 + ", " + num3 + " → " + max);
}

// Program 3: Generate multiplication table
function multiplicationTable() {
    const num = parseInt(document.getElementById("table").value);
    const resultBox = document.getElementById("result3");

    if (isNaN(num) || num === 0) {
        resultBox.textContent = "⚠️ Please enter a valid non-zero number!";
        resultBox.classList.remove("result-success");
        resultBox.classList.add("show");
        return;
    }

    let table = "<strong>Multiplication Table of " + num + ":</strong><br>";
    for (let i = 1; i <= 10; i++) {
        table += num + " × " + i + " = " + (num * i) + "<br>";
    }

    resultBox.innerHTML = "✓ " + table;
    resultBox.classList.add("result-success");
    resultBox.classList.add("show");
    console.log("Multiplication table of " + num + " generated");
}

// Program 4: Check if number is even or odd
function checkEvenOdd() {
    const num = parseInt(document.getElementById("evenOdd").value);
    const resultBox = document.getElementById("result4");

    if (isNaN(num)) {
        resultBox.textContent = "⚠️ Please enter a valid number!";
        resultBox.classList.remove("result-success");
        resultBox.classList.add("show");
        return;
    }

    let type;
    if (num % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }

    resultBox.textContent = "✓ " + num + " is " + type;
    resultBox.classList.add("result-success");
    resultBox.classList.add("show");
    console.log("Even/Odd Check: " + num + " is " + type);
}
