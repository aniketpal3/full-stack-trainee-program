# 🚀 Task Manager with Authentication

A Full Stack Task Manager Application built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, JWT Authentication, and Axios**.

This project was developed as the final Capstone Project of the Full Stack Trainee Program.

---

## 📌 Project Overview

Task Manager with Authentication allows users to:

* Create an account
* Login securely
* Manage their own tasks
* Create, update, complete, and delete tasks
* View task statistics
* Store data permanently in MongoDB

Each user can access only their own tasks through protected routes secured with JWT authentication.

---

## ✨ Features

### Authentication

* User Signup
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing using bcryptjs

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Mark Tasks as Complete
* Undo Completed Tasks
* Task Categories
* Due Dates

### Dashboard

* Total Tasks
* Completed Tasks
* Pending Tasks
* User-specific Task Management

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Netlify (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```txt
Day-20-Capstone-Project/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── signup.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## 🔗 API Routes

### Authentication Routes

| Method | Route             |
| ------ | ----------------- |
| POST   | /api/auth/signup  |
| POST   | /api/auth/login   |
| GET    | /api/auth/profile |

### Task Routes

| Method | Route                    |
| ------ | ------------------------ |
| GET    | /api/tasks               |
| POST   | /api/tasks               |
| PUT    | /api/tasks/:id           |
| DELETE | /api/tasks/:id           |
| GET    | /api/tasks/stats/summary |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Day-20-Capstone-Project
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Run Backend

```bash
node server.js
```

---

### Frontend Setup

Open frontend folder and run using Live Server.

```txt
frontend/index.html
```

---

## ▶️ Application Flow

1. User Signup
2. User Login
3. JWT Token Generated
4. Token Stored in Local Storage
5. User Accesses Dashboard
6. Create / Update / Delete Tasks
7. View Dashboard Statistics
8. Logout

---

## 🌐 Deployment

### Frontend

Deploy on Netlify

### Backend

Deploy on Render

### Database

MongoDB Atlas

---

## 📈 Future Improvements

* Search Tasks
* Task Priority Levels
* User Profile Management
* Email Verification
* Password Reset
* Dark Mode
* File Attachments
* Team Collaboration

---

## 🎯 Learning Outcomes

This project demonstrates:

* Frontend Development
* Backend Development
* REST API Development
* MongoDB Database Integration
* Authentication & Authorization
* CRUD Operations
* Frontend–Backend Integration
* Deployment & Hosting

---

## 👨‍💻 Author

**Aniket Pal**

BCA – Shri Ramswaroop Memorial University

Full Stack Developer

GitHub: https://github.com/palaniket227

---

## ⭐ Capstone Project

Final Project submitted as part of the Full Stack Trainee Program (Day 20 Capstone Project).
