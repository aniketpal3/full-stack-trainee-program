# Day 19 – Mini Full Stack Project: Task Manager

## Learning Objectives

By the end of Day 19, students will:

- Build a full stack project from scratch.
- Create backend API using Express and MongoDB.
- Connect frontend with backend using Axios.
- Perform CRUD operations on tasks.
- Store tasks permanently in MongoDB.
- Prepare project for deployment.

---

## Project Overview

Task Manager App allows users to:

- Add new tasks
- View all tasks
- Mark tasks as completed
- Edit tasks
- Delete tasks
- Store tasks in MongoDB

---

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## Backend Routes

```txt
GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
```

---

## Task Schema

```js
{
  title: String,
  completed: Boolean,
  category: String,
  userId: String,
  createdAt: Date
}
```

---

## CRUD Operations

### Create

```txt
POST /tasks
```

### Read

```txt
GET /tasks
```

### Update

```txt
PUT /tasks/:id
```

### Delete

```txt
DELETE /tasks/:id
```

---

## Deployment Plan

Frontend:

```txt
Netlify
```

Backend:

```txt
Render
```

Database:

```txt
MongoDB Atlas
```

---

## Recap

Day 19 focuses on building a complete full stack Task Manager project using frontend, backend, and database.