# User Management API with MongoDB

## Project Overview

This mini project connects the Day 13 User Management API with MongoDB.

Earlier, users were stored in an in-memory array. In this project, users are stored permanently in MongoDB using Mongoose.

---

## Features

- Create users in MongoDB
- Fetch all users
- Fetch single user by ID
- Update user by ID
- Delete user by ID
- Fetch only active users
- Fetch users older than a given age
- Persistent data storage
- Validation
- Error handling

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Folder Structure

```txt
user-management-mongodb/
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

## MongoDB Database

```txt
day14-user-management-db
```

---

## Routes

### Home

```txt
GET /
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
  "age": 22,
  "isActive": true
}
```

### Get All Users

```txt
GET /users
```

### Get Active Users

```txt
GET /users/active
```

### Get Users Older Than Age

```txt
GET /users/age/18
```

### Get Single User

```txt
GET /users/:id
```

### Update User

```txt
PUT /users/:id
```

Body:

```json
{
  "age": 23,
  "isActive": false
}
```

### Delete User

```txt
DELETE /users/:id
```

---

## Testing Tools

Use:

- Postman
- Thunder Client
- Browser for GET requests

---

## Important Note

This project uses local MongoDB:

```txt
mongodb://127.0.0.1:27017/day14-user-management-db
```

For MongoDB Atlas, replace `MONGO_URI` in `server.js`.

---

## Learning Outcomes

After completing this mini project, students will understand:

- How to connect Express API with MongoDB
- How to create Mongoose schema and model
- How to perform CRUD operations with MongoDB
- How to validate database fields
- How to use query filters
- How database persistence works