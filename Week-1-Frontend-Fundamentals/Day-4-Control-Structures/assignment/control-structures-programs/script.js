// =========================
// Program 1 - Multiplication Table
// =========================

let number = 7;
let tableOutput = "";

for (let i = 1; i <= 10; i++) {
  tableOutput += `${number} × ${i} = ${number * i}<br>`;
}

document.getElementById("table").innerHTML = tableOutput;


// =========================
// Program 2 - Prime Number Check
// =========================

let primeNumber = 17;
let isPrime = true;

if (primeNumber <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  document.getElementById("prime").innerHTML =
    `${primeNumber} is a Prime Number`;
} else {
  document.getElementById("prime").innerHTML =
    `${primeNumber} is NOT a Prime Number`;
}


// =========================
// Program 3 - Sum 1 to 100
// =========================

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

document.getElementById("sum").innerHTML =
  `Sum of numbers from 1 to 100 = ${sum}`;


console.log("Assignment Completed Successfully");