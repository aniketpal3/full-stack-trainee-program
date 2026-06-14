# Day 8 Assignment – Async JavaScript Practice

## Objective

Practice asynchronous JavaScript using `fetch()`, Promises, `async`, and `await`.

---

## Assignment Tasks

### 1. Fetch Posts

Fetch posts from:

```txt
https://jsonplaceholder.typicode.com/posts
```

Display the first 5 post titles.

---

### 2. Simulate Download

Create a function:

```js
simulateDownload(file)
```

It returns a Promise and resolves after a random time between 1 and 5 seconds.

Download 3 files in sequence using `await`.

---

### 3. Display API Data on Webpage

Fetch users from JSONPlaceholder and display names and emails using DOM.

---

### 4. Simulated Weather Function

Create:

```js
getWeather(city)
```

It simulates fetching weather data using `setTimeout`.

---

## Concepts Used

- Asynchronous JavaScript
- setTimeout()
- Promises
- async functions
- await
- fetch()
- try...catch
- DOM manipulation

---

## Folder Structure

```txt
async-javascript-practice/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Open this folder in VS Code.
2. Open `index.html`.
3. Right-click and select **Open with Live Server**.
4. Click each button and observe async behavior.

---

## Expected Output

- First 5 post titles displayed
- Files downloaded sequentially
- User names and emails displayed
- Weather message displayed after delay

---

## Learning Outcomes

After completing this assignment, students will understand:

- How APIs are fetched
- How async/await makes code readable
- How Promises work
- How to handle errors in async code
- How to update DOM after async tasks