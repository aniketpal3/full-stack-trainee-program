# Day 13 – REST APIs with Express.js

## Learning Objectives

By the end of Day 13, students will:

- Understand REST APIs
- Learn CRUD Operations
- Learn GET, POST, PUT, DELETE
- Work with JSON data
- Build RESTful APIs
- Create User Management API

---

# What is REST API?

REST stands for:

Representational State Transfer

REST APIs allow communication between:

- Frontend
- Backend
- Mobile Apps
- Databases

using HTTP requests.

---

# HTTP Methods

## GET

Used to fetch data.

Example:

```http
GET /users
```

---

## POST

Used to create data.

Example:

```http
POST /users
```

---

## PUT

Used to update data.

Example:

```http
PUT /users/1
```

---

## DELETE

Used to delete data.

Example:

```http
DELETE /users/1
```

---

# JSON Data

Example:

```json
{
  "id": 1,
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

---

# Express JSON Middleware

```js
app.use(express.json());
```

Used for parsing JSON request bodies.

---

# CRUD Operations

C = Create

R = Read

U = Update

D = Delete

---

# API Routes

```txt
GET     /users
GET     /users/:id
POST    /users
PUT     /users/:id
DELETE  /users/:id
```

---

# Error Handling

Example:

```js
if (!user) {
  return res.status(404).json({
    message: "User not found"
  });
}
```

---

# Validation

```js
if (!req.body.name) {
  return res.status(400).json({
    message: "Name required"
  });
}
```

---

# Recap

Today we learned:

- REST APIs
- CRUD
- GET
- POST
- PUT
- DELETE
- JSON
- Validation
- Error Handling