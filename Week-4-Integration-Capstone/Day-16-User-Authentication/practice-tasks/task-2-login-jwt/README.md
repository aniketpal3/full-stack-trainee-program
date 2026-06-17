# Task 2 – Login with JWT

## Objective

Create a login route that checks the password using bcrypt and returns a JWT token.

---

## Features

- Signup route for testing
- Login route
- Password comparison using bcrypt
- JWT token generation
- Error handling for invalid login

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
http://localhost:3001
```

---

## Signup Route

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

## Login Route

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

---

## Success Response

```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

---

## Incorrect Password Response

```json
{
  "message": "Invalid credentials"
}
```

---

## Learning Outcomes

Students learn:

- How to verify password using bcrypt
- How to generate JWT token
- How login flow works
- How authentication starts after login