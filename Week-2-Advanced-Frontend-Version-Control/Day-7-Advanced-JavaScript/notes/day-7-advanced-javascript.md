# Day 7 – Advanced JavaScript (ES6 Features, Arrays, Objects)

## Learning Objectives

By the end of Day 7, students will:

- Understand ES6 features.
- Work with arrays and objects.
- Use modern JavaScript syntax.
- Learn map(), filter(), reduce(), forEach().
- Build a Student Records App.

---

# 1. ES6 Features

## Let and Const

```js
let age = 25;
const pi = 3.14;
```

- let can be reassigned
- const cannot be reassigned

---

## Template Literals

```js
let name = "Rahul";

console.log(`Hello ${name}`);
```

---

## Arrow Functions

```js
const square = (x) => x * x;

console.log(square(5));
```

Output:

```txt
25
```

---

## Destructuring

### Array Destructuring

```js
let arr = [10, 20];

let [a, b] = arr;
```

### Object Destructuring

```js
let person = {
  name: "Aditi",
  age: 21
};

let { name, age } = person;
```

---

## Spread Operator

```js
let nums = [1, 2, 3];

let newNums = [...nums, 4, 5];
```

Output:

```txt
[1,2,3,4,5]
```

---

# 2. Arrays

Arrays store multiple values.

```js
let fruits = [
  "Apple",
  "Banana",
  "Mango"
];
```

Access:

```js
fruits[0]
```

---

## Array Methods

### push()

```js
fruits.push("Orange");
```

### pop()

```js
fruits.pop();
```

### shift()

```js
fruits.shift();
```

### unshift()

```js
fruits.unshift("Grapes");
```

---

## forEach()

```js
fruits.forEach(fruit => {
  console.log(fruit);
});
```

---

# 3. Objects

Objects represent real-world entities.

```js
let student = {
  name: "Rahul",
  age: 22,
  course: "Full Stack"
};
```

---

## Object Methods

```js
let car = {
  brand: "Tesla",

  start() {
    console.log("Car Started");
  }
};
```

---

# 4. Higher Order Array Methods

## map()

```js
let numbers = [1,2,3];

let squares =
numbers.map(n => n * n);
```

---

## filter()

```js
let adults =
ages.filter(age => age >= 18);
```

---

## reduce()

```js
let total =
nums.reduce(
(acc, n) => acc + n,
0
);
```

---

## find()

```js
let result =
numbers.find(n => n > 10);
```

---

# 5. Combining Arrays and Objects

```js
let students = [
 {name:"Rahul", marks:85},
 {name:"Aditi", marks:92},
 {name:"Aman", marks:76}
];
```

Filtering toppers:

```js
students.filter(
s => s.marks > 80
);
```

---

# Recap

Today we learned:

- let and const
- Template Literals
- Arrow Functions
- Destructuring
- Spread Operator
- Arrays
- Objects
- map()
- filter()
- reduce()
- find()

---

# Mini Project

Student Records App