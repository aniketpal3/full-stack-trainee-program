# Fake API Data Fetcher

## Project Overview

Fake API Data Fetcher is a JavaScript project that fetches user data from JSONPlaceholder API and displays it on a webpage.

This project demonstrates two ways of handling asynchronous code:

1. Promises using `.then()` and `.catch()`
2. Modern `async/await`

---

## API Used

```txt
https://jsonplaceholder.typicode.com/users
```

---

## Features

- Fetch users using Promises
- Fetch users using Async/Await
- Display user name, email, phone, company, and city
- Clear displayed users
- Responsive card layout
- Error handling using catch and try...catch

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSONPlaceholder API

---

## Concepts Used

- Asynchronous JavaScript
- fetch()
- Promises
- then()
- catch()
- async
- await
- try...catch
- DOM manipulation
- API response handling

---

## Folder Structure

```txt
fake-api-data-fetcher/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Open this folder in VS Code.
2. Open `index.html`.
3. Run with Live Server.
4. Click **Load Users with Promises**.
5. Click **Load Users with Async/Await**.
6. Click **Clear** to remove users.

---

## Expected Output

User cards showing:

```txt
Name
Email
Phone
Company
City
```

---

## Learning Outcomes

After completing this project, students will understand:

- Why async JavaScript is important
- How API calls work
- How Promises handle async data
- How Async/Await improves readability
- How to display fetched data on a webpage

---

## Future Improvements

- Add search by name
- Add loading spinner
- Add user details modal
- Add posts/comments fetch
- Add error UI component

---

## Author

Full Stack Trainee Program  
Week 2 – Day 8 Mini Project