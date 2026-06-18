# Task Manager Full Stack App

## Project Overview

This is a full stack Task Manager application built with HTML, CSS, JavaScript, Axios, Node.js, Express.js, MongoDB, and Mongoose.

---

## Features

- Add tasks
- View all tasks
- Mark tasks as completed
- Edit task title
- Delete tasks
- Add task category
- Sort tasks by latest creation date
- Add user ID to tasks
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

## Folder Structure

```txt
task-manager-app/
├── README.md
├── backend/
│   ├── package.json
│   ├── server.js
│   └── models/
│       └── Task.js
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Backend Routes

```txt
GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
```

---

## Run Backend

```bash
cd backend
npm install
node server.js
```

Backend URL:

```txt
http://localhost:3000
```

---

## Run Frontend

Open:

```txt
frontend/index.html
```

using Live Server.

---

## Deployment

### Backend

Deploy backend on Render.

Build Command:

```txt
npm install
```

Start Command:

```txt
node server.js
```

### Frontend

Deploy frontend on Netlify.

Update API URL in frontend `script.js`:

```js
const API = "https://your-backend.onrender.com/tasks";
```

---

## Learning Outcomes

Students learn:

- Full stack project structure
- Backend API development
- MongoDB database connection
- Frontend API integration
- CRUD operations
- Deployment basics