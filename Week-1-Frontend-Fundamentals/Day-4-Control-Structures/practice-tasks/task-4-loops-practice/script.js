// Task 4: Practice JavaScript loops

// Print numbers 1 to 10 using for loop
let numbersOutput = "";

for (let i = 1; i <= 10; i++) {
  numbersOutput += i + " ";
}

document.getElementById("numbers").textContent = numbersOutput;
console.log("Numbers 1 to 10:", numbersOutput);

// Print even numbers from 1 to 20 using while loop
let evenNumbersOutput = "";
let number = 1;

while (number <= 20) {
  if (number % 2 === 0) {
    evenNumbersOutput += number + " ";
  }

  number++;
}

document.getElementById("evenNumbers").textContent = evenNumbersOutput;
console.log("Even Numbers:", evenNumbersOutput);

// Print elements of an array using for...of loop
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsOutput = "";

for (let fruit of fruits) {
  fruitsOutput += fruit + " ";
}

document.getElementById("fruits").textContent = fruitsOutput;
console.log("Fruits:", fruitsOutput);