# Day 8 – Async JavaScript

## Learning Objectives

By the end of Day 8, students will:

- Understand asynchronous JavaScript.
- Learn callbacks.
- Learn promises.
- Learn async/await.
- Understand the event loop.
- Build a Fake API Data Fetcher.

---

# Why Async JavaScript?

JavaScript is single-threaded.

It executes one task at a time.

Long-running operations can block execution.

Async programming solves this issue.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");
```

Output:

```txt
Start
End
Hello after 2 seconds
```

---

# Callbacks

A callback is a function passed into another function.

Example:

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
```

---

# Callback Hell

```js
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
```

Problem:

- Hard to read
- Hard to maintain

---

# Promises

A Promise represents a future value.

States:

- Pending
- Fulfilled
- Rejected

Example:

```js
let promise =
new Promise((resolve, reject) => {

  resolve("Success");

});
```

Using Promise:

```js
promise
.then(result => console.log(result))
.catch(error => console.log(error));
```

---

# Async / Await

Modern way of handling promises.

Example:

```js
async function loadData() {

  let data =
  await fetchData();

  console.log(data);

}
```

---

# Error Handling

```js
try {

  let data =
  await fetchData();

}
catch(error) {

  console.log(error);

}
```

---

# Recap

Today we learned:

- Async Programming
- Event Loop
- Callbacks
- Callback Hell
- Promises
- Async/Await
- Error Handling

---

# Mini Project

Fake API Data Fetcher