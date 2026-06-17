# Day 14 – Introduction to Databases (MySQL vs MongoDB)

## Learning Objectives

- Understand databases
- Learn SQL vs NoSQL
- Understand MongoDB
- Connect Node.js with MongoDB
- Create Schema & Model
- Perform CRUD Operations

---

# What is a Database?

A database stores application data permanently.

Without database:

```js
let users = [];
```

Data disappears when server restarts.

With database:

Data remains stored permanently.

---

# SQL Databases

Examples:

- MySQL
- PostgreSQL
- SQL Server

Data stored in tables.

Example:

| id | name  | email |
|----|--------|--------|
| 1 | Rahul | rahul@example.com |

Schema is fixed.

---

# NoSQL Databases

Examples:

- MongoDB
- Firebase Firestore
- Cassandra

Data stored as documents.

Example:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

Flexible schema.

---

# SQL vs MongoDB

## SQL

- Tables
- Rows & Columns
- Fixed Schema

## MongoDB

- Collections
- Documents
- Flexible Schema

---

# Why MongoDB?

- JSON Based
- MERN Stack
- Fast Development
- Flexible Data Structure
- Easy Integration with Node.js

---

# Mongoose

Mongoose is an ODM.

ODM = Object Data Modeling

Install:

```bash
npm install mongoose
```

---

# MongoDB Connection

```js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/testdb"
);
```

---

# Schema

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
```

---

# Model

```js
const User = mongoose.model(
  "User",
  userSchema
);
```

---

# CRUD

Create

Read

Update

Delete

---

# Recap

- Database Basics
- SQL vs NoSQL
- MongoDB
- Mongoose
- Schema
- Model
- CRUD Operations