# Day 16 – User Authentication

## Learning Objectives

By the end of Day 16, students will:

- Understand authentication and authorization.
- Create signup and login APIs.
- Hash passwords using bcrypt.
- Generate JWT tokens.
- Create protected routes.
- Build a secure user authentication API.

---

## Authentication vs Authorization

### Authentication

Authentication means verifying user identity.

Example:

```txt
Signup
Login
```

### Authorization

Authorization means checking user permissions.

Example:

```txt
Admin dashboard access
Protected profile route
```

---

## Why Password Hashing?

Passwords should never be stored as plain text.

Wrong:

```txt
password123
```

Correct:

```txt
$2a$10$hashedPasswordValue...
```

Password hashing is done using:

```txt
bcryptjs
```

---

## bcryptjs

Install:

```bash
npm install bcryptjs
```

Hash password:

```js
const hashedPassword = await bcrypt.hash(password, 10);
```

Compare password:

```js
const isMatch = await bcrypt.compare(password, user.password);
```

---

## JWT

JWT means JSON Web Token.

It is used to authenticate users after login.

Install:

```bash
npm install jsonwebtoken
```

Create token:

```js
const token = jwt.sign(
  { id: user._id },
  "secretkey",
  { expiresIn: "1h" }
);
```

---

## Protected Routes

A protected route requires a valid token.

Example:

```txt
GET /profile
```

Request header:

```txt
Authorization: Bearer token_here
```

---

## Auth Flow

```txt
Signup
↓
Hash Password
↓
Save User in MongoDB
↓
Login
↓
Compare Password
↓
Generate JWT
↓
Access Protected Route
```

---

## Packages Used

```bash
npm install express mongoose bcryptjs jsonwebtoken
```

---

## Recap

Today we learned:

- Authentication
- Authorization
- Password hashing
- JWT token
- Protected routes
- Auth middleware