# Day 20 Capstone Backend

## Project Name

Task Manager with Authentication

## Features

- User signup
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected task routes
- Create task
- Read own tasks
- Update own tasks
- Delete own tasks
- Dashboard task statistics
- MongoDB persistent storage

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

## Folder Structure

```txt
backend/
├── package.json
├── server.js
├── .env.example
├── README.md
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
└── middleware/
    └── auth.js
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

Create a real `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/day20-capstone-task-manager
JWT_SECRET=my_secret_key
```

## Run Server

```bash
node server.js
```

or

```bash
npm start
```

## Base URL

```txt
http://localhost:5000
```

## API Routes

### Home

```txt
GET /
```

### Signup

```txt
POST /api/auth/signup
```

Body:

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "password": "password123"
}
```

### Login

```txt
POST /api/auth/login
```

Body:

```json
{
  "email": "aniket@example.com",
  "password": "password123"
}
```

### Profile

```txt
GET /api/auth/profile
```

Header:

```txt
Authorization: Bearer your_token
```

### Get Tasks

```txt
GET /api/tasks
```

Header:

```txt
Authorization: Bearer your_token
```

### Create Task

```txt
POST /api/tasks
```

Header:

```txt
Authorization: Bearer your_token
```

Body:

```json
{
  "title": "Complete Capstone Project",
  "description": "Finish backend and frontend",
  "category": "Study",
  "dueDate": "2026-06-20"
}
```

### Update Task

```txt
PUT /api/tasks/:id
```

Header:

```txt
Authorization: Bearer your_token
```

Body:

```json
{
  "completed": true
}
```

### Delete Task

```txt
DELETE /api/tasks/:id
```

Header:

```txt
Authorization: Bearer your_token
```

### Stats

```txt
GET /api/tasks/stats/summary
```

Header:

```txt
Authorization: Bearer your_token
```

## Testing Tools

Use:

- Thunder Client
- Postman

## Important

Do not push `.env` file to GitHub.

Only push:

```txt
.env.example
```

## Deployment Notes

On Render, add environment variables:

```txt
MONGO_URI
JWT_SECRET
PORT
```