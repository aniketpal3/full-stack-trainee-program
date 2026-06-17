# Task 1 – Signup with Password Hashing

## Objective

Create a `/signup` route that stores users in MongoDB with hashed passwords.

---

## Features

- Signup route
- MongoDB user storage
- Password hashing using bcryptjs
- Duplicate email check
- Input validation

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs

---

## Folder Structure

```txt
task-1-signup-password-hashing/
├── package.json
├── server.js
└── README.md
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Server

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

## Signup Route

```txt
POST /signup
```

### Request Body

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "message": "User created successfully",
  "user": {
    "id": "mongodb_id",
    "name": "Aniket",
    "email": "aniket@example.com"
  }
}
```

---

## Important

Password is stored as a hashed value in MongoDB.

Example:

```txt
$2a$10$someHashedPasswordValue
```

---

## Testing Tool

Use:

- Postman
- Thunder Client

---

## Learning Outcomes

Students learn:

- How to create signup API
- How to hash passwords
- Why raw passwords should not be stored
- How to validate signup data
- How to prevent duplicate emails