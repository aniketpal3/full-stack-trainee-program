// ===============================
// Program 1: Factorial Function
// ===============================

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

let factorialNumber = 5;

document.getElementById("factorialResult").innerHTML =
  `Factorial of ${factorialNumber} is ${factorial(factorialNumber)}`;

console.log("Factorial:", factorial(factorialNumber));


// ===============================
// Program 2: Reverse String Function
// ===============================

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

let originalString = "JavaScript";

document.getElementById("reverseResult").innerHTML =
  `Reverse of ${originalString} is ${reverseString(originalString)}`;

console.log("Reverse String:", reverseString(originalString));


// ===============================
// Program 3: Palindrome Check Function
// ===============================

function isPalindrome(str) {
  let cleanString = str.toLowerCase();
  let reversedString = reverseString(cleanString);

  return cleanString === reversedString;
}

let palindromeWord = "madam";

document.getElementById("palindromeResult").innerHTML =
  isPalindrome(palindromeWord)
    ? `${palindromeWord} is a palindrome`
    : `${palindromeWord} is not a palindrome`;

console.log("Palindrome Check:", isPalindrome(palindromeWord));


// ===============================
// Program 4: To-Do Completed Function Demo
// ===============================

let tasks = [
  { title: "Learn JavaScript Functions", completed: false },
  { title: "Practice Scope Examples", completed: false },
  { title: "Build To-Do List", completed: false }
];

function markTaskCompleted(index) {
  if (index < 0 || index >= tasks.length) {
    return "Invalid task index";
  }

  tasks[index].completed = true;
  return `${tasks[index].title} marked as completed`;
}

markTaskCompleted(1);

let todoOutput = "";

for (let i = 0; i < tasks.length; i++) {
  todoOutput += `${i + 1}. ${tasks[i].title} - ${
    tasks[i].completed ? "Completed" : "Pending"
  }<br>`;
}

document.getElementById("todoResult").innerHTML = todoOutput;

console.log("Tasks:", tasks);