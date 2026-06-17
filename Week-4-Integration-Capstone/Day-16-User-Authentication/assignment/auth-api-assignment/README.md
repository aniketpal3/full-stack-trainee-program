# Auth API Assignment

## Objective

Extend authentication API with duplicate email prevention, role-based admin access, and logout token blacklist.

---

## Features

- Signup
- Duplicate email prevention
- Password hashing
- Login
- JWT token generation
- Protected profile route
- Role field: admin/user
- Admin-only route
- Logout route
- Token blacklist

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
auth-api-assignment/
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
http://localhost:4000
```

---

## Signup User

```txt
POST /signup
```

Body:

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "password": "password123",
  "role": "user"
}
```

---

## Signup Admin

```txt
POST /signup
```

Body:

```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
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
  "email": "admin@example.com",
  "password": "admin123"
}
```

---

## Profile Protected Route

```txt
GET /profile
```

Header:

```txt
Authorization: Bearer your_token_here
```

---

## Admin Route

```txt
GET /admin
```

Header:

```txt
Authorization: Bearer admin_token_here
```

---

## Logout

```txt
POST /logout
```

Header:

```txt
Authorization: Bearer your_token_here
```

---

## Expected Responses

### Duplicate Email

```json
{
  "message": "Email already exists"
}
```

### User Accessing Admin Route

```json
{
  "message": "Access denied. Admin only."
}
```

### Logout

```json
{
  "message": "Logout successful. Token blacklisted."
}
```

---

## Important Note

The blacklist is stored in an array, so it resets when the server restarts.

---

## Learning Outcomes

Students learn:

- Duplicate email handling
- Role-based access control
- JWT payload with role
- Logout using token blacklist
- Protected admin route