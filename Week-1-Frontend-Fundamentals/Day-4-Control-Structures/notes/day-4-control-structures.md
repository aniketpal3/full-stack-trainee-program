# Day 4 – JavaScript Control Structures

## Learning Objectives

By the end of Day 4, students will be able to:

- Understand how control structures manage program flow.
- Use `if`, `else if`, and `else` statements.
- Use the `switch` statement.
- Practice different loops such as `for`, `while`, `do...while`, and `for...of`.
- Understand nested loops.
- Use `break` and `continue`.
- Build a Number Guessing Game using JavaScript control structures.

---

## 1. What are Control Structures?

Control structures are used to control the flow of a program.

They help JavaScript decide:

- Which code should run
- Which condition should be checked
- How many times code should repeat

Example:

```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
```

---

## 2. If Statement

The `if` statement runs code only when the condition is true.

```js
let marks = 70;

if (marks >= 50) {
  console.log("Pass");
}
```

---

## 3. If Else Statement

The `else` block runs when the `if` condition is false.

```js
let marks = 35;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

## 4. Else If Ladder

The `else if` statement is used when we have multiple conditions.

```js
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

---

## 5. Switch Statement

The `switch` statement is used when we want to compare one value with many cases.

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

### Why use `break`?

`break` stops the switch block after a matching case is found.

---

## 6. Loops in JavaScript

Loops are used to repeat code.

---

### 6.1 For Loop

Use a `for` loop when you know how many times the code should run.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

---

### 6.2 While Loop

Use a `while` loop when the condition should be checked before running the loop.

```js
let i = 1;

while (i <= 5) {
  console.log("Count: " + i);
  i++;
}
```

---

### 6.3 Do While Loop

A `do...while` loop runs at least once, even if the condition is false.

```js
let i = 1;

do {
  console.log("Value: " + i);
  i++;
} while (i <= 5);
```

---

### 6.4 For Of Loop

The `for...of` loop is used to loop over arrays.

```js
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 7. Nested Loops

A nested loop means one loop inside another loop.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

---

## 8. Break Statement

The `break` statement stops the loop.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}
```

Output:

```txt
1
2
```

---

## 9. Continue Statement

The `continue` statement skips the current loop iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```txt
1
2
4
5
```

---

## 10. Mini Project – Number Guessing Game

In this project:

- Computer chooses a random number between 1 and 10.
- User enters a guess.
- If the guess is correct, user wins.
- If the guess is wrong, message shows too high or too low.
- User gets limited attempts.

---

## Day 4 Recap

Today we learned:

- Conditional statements
- Switch statement
- Loops
- Nested loops
- Break and continue
- Number Guessing Game logic

---

## Practice Tasks

1. Check if a number is positive, negative, or zero.
2. Check temperature: Hot, Warm, or Cold.
3. Print month name using switch.
4. Practice loops.
5. Skip number 5 using continue.

---

## Assignment

1. Print multiplication table.
2. Check if a number is prime.
3. Calculate sum from 1 to 100.
4. Extend Number Guessing Game with 5 attempts.