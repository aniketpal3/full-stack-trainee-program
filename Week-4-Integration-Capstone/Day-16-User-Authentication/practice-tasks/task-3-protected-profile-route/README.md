# Task 3 – Protected Profile Route

## Objective

Create a protected `/profile` route that works only with a valid JWT token.

---

## Features

- Signup
- Login
- JWT token generation
- Auth middleware
- Protected profile route
- Password hidden in profile response

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

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
http://localhost:3002
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

Copy the token from response.

---

## Access Profile

```txt
GET /profile
```

Headers:

```txt
Authorization: Bearer your_token_here
```

---

## Without Token Response

```json
{
  "message": "No token, access denied"
}
```

---

## Invalid Token Response

```json
{
  "message": "Invalid token"
}
```

---

## Learning Outcomes

Students learn:

- How auth middleware works
- How JWT protects routes
- How to pass token in headers
- How to fetch logged-in user profile