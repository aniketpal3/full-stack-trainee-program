# Task 4 – Async Fetch User

## Objective

Write an async function `fetchUser()` that waits 2 seconds, then logs:

```txt
User data received
```

---

## Concepts Used

- Promise
- async function
- await
- setTimeout()
- DOM Manipulation
- console.log()

---

## Folder Structure

```txt
task-4-async-fetch-user/
├── index.html
├── script.js
└── README.md
```

---

## How It Works

1. `getUserData()` returns a Promise.
2. Promise resolves after 2 seconds.
3. `fetchUser()` waits using `await`.
4. After promise resolves, output is shown.

---

## Expected Output

```txt
Fetching user data...

After 2 seconds:

User data received
```

---

## Learning Outcome

Students understand how to use async and await with Promises.