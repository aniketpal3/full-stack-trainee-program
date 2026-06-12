// Task 1: Check whether a number is positive, negative, or zero

let number = -10;

let resultElement = document.getElementById("result");

if (number > 0) {
  resultElement.textContent = number + " is a positive number.";
  console.log(number + " is positive.");
} else if (number < 0) {
  resultElement.textContent = number + " is a negative number.";
  console.log(number + " is negative.");
} else {
  resultElement.textContent = number + " is zero.";
  console.log(number + " is zero.");
}