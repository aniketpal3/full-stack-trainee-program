# User Management API

## Project Overview

A REST API built with Express.js that performs CRUD operations on users using an in-memory array.

---

## Features

- Get all users
- Get user by ID
- Add new user
- Update existing user
- Delete user
- Search users by name
- Get adult users
- Get all emails
- Input validation
- Error handling

---

## Technologies Used

- Node.js
- Express.js
- REST API
- JSON

---

## Installation

```bash
npm install
```

---

## Run Project

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

## API Routes

### Home

```txt
GET /
```

### Get All Users

```txt
GET /users
```

### Get User By ID

```txt
GET /users/1
```

### Create User

```txt
POST /users
```

Body:

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "age": 22
}
```

### Update User

```txt
PUT /users/1
```

### Delete User

```txt
DELETE /users/2
```

### Search User

```txt
GET /users/search/Rahul
```

### Adult Users

```txt
GET /users/adults/list
```

### User Emails

```txt
GET /users/emails/list
```

---

## Sample Output

### GET /users

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@example.com",
    "age": 22
  }
]
```

---

## Learning Outcomes

- REST API Design
- CRUD Operations
- JSON Handling
- Express Routing
- Validation
- Error Handling