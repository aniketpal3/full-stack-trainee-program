# Task Manager Backend

## Project Overview

This is the backend API for the Day 19 Task Manager Full Stack Project.

It uses Express.js, MongoDB, Mongoose, and CORS.

---

## Features

- Create task
- Get all tasks
- Update task
- Delete task
- Mark task as completed
- Task categories
- User ID support
- MongoDB persistent storage

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## Folder Structure

```txt
backend/
├── package.json
├── server.js
├── README.md
└── models/
    └── Task.js
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Backend

```bash
node server.js
```

or

```bash
npm start
```

---

## Base URL

```txt
http://localhost:3000
```

---

## API Routes

### Home

```txt
GET /
```

### Get All Tasks

```txt
GET /tasks
```

### Create Task

```txt
POST /tasks
```

Body:

```json
{
  "title": "Learn Full Stack",
  "category": "Work",
  "userId": "user1"
}
```

### Update Task

```txt
PUT /tasks/:id
```

Body:

```json
{
  "completed": true
}
```

### Delete Task

```txt
DELETE /tasks/:id
```

---

## MongoDB Database

```txt
taskdb
```

---

## Testing Tools

Use:

- Browser for GET requests
- Postman
- Thunder Client

---

## Learning Outcomes

Students learn how to create a backend API for a full stack app using Express and MongoDB.