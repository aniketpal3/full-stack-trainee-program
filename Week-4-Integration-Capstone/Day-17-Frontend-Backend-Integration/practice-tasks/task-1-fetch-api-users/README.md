# Task 1 – Fetch API Users Table

## Objective

Fetch all users from the backend and display them in a table on the webpage.

---

## Backend Requirement

Backend should be running on:

```txt
http://localhost:5000
```

Required route:

```txt
GET /users
```

Example response:

```json
[
  {
    "_id": "mongodb_id",
    "name": "Aniket",
    "email": "aniket@example.com",
    "age": 22
  }
]
```

---

## Frontend Files

```txt
task-1-fetch-api-users/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Start backend API first.

Example backend:

```txt
Day 15 Mini Project User CRUD API
```

2. Open this folder in VS Code.

3. Open `index.html` with Live Server.

4. Click:

```txt
Load Users
```

---

## Concepts Used

- Fetch API
- async/await
- GET request
- DOM manipulation
- Table rendering
- Error handling

---

## Important

If you get a CORS error, install and use CORS in backend:

```bash
npm install cors
```

In backend `server.js`:

```js
const cors = require("cors");

app.use(cors());
```

---

## Learning Outcome

Students learn how frontend fetches backend data and renders it on a webpage.