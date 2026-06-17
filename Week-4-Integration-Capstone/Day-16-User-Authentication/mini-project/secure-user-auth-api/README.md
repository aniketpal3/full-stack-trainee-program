# Secure User Auth API

## Project Overview

Secure User Auth API is a backend authentication system built using Express.js, MongoDB, bcryptjs, and JWT.

It supports user signup, login, password hashing, JWT token generation, and protected profile access.

---

## Features

- User signup
- Duplicate email prevention
- Password hashing using bcryptjs
- User login
- JWT token generation
- Protected profile route
- MongoDB user storage
- Input validation
- Error handling

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

---

## Folder Structure

```txt
secure-user-auth-api/
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
http://localhost:5000
```

---

## Signup

```txt
POST /signup
```

Body:

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "password": "password123"
}
```

---

## Login

```txt
POST /login
```

Body:

```json
{
  "email": "aniket@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

---

## Access Protected Profile

```txt
GET /profile
```

Header:

```txt
Authorization: Bearer your_token_here
```

---

## Without Token

```json
{
  "message": "No token, access denied"
}
```

---

## With Valid Token

```json
{
  "message": "Profile fetched successfully",
  "user": {
    "_id": "mongodb_user_id",
    "name": "Aniket",
    "email": "aniket@example.com"
  }
}
```

---

## Testing Tools

Use:

- Postman
- Thunder Client

---

## Security Notes

- Never store plain passwords.
- Always hash passwords before saving.
- JWT secret should be stored in `.env` in production.
- HTTPS should be used in production.

---

## Learning Outcomes

Students learn:

- Authentication flow
- Password hashing
- JWT-based authentication
- Protected routes
- Secure API development