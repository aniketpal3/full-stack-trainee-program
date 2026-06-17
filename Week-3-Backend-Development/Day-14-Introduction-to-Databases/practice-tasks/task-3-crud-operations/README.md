# Task 3 – MongoDB CRUD Operations

## Objective

Perform basic CRUD operations using MongoDB and Mongoose.

CRUD means:

- Create
- Read
- Update
- Delete

---

## Technologies Used

- Node.js
- MongoDB
- Mongoose

---

## Folder Structure

```txt
task-3-crud-operations/
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

## Run Program

```bash
node server.js
```

or

```bash
npm start
```

---

## Database Used

```txt
day14db
```

---

## Collection Used

```txt
users
```

---

## Operations Performed

### 1. Create

Creates a new user:

```js
{
  name: "Rahul",
  email: "rahul@example.com",
  age: 22
}
```

---

### 2. Read

Fetches all users using:

```js
User.find()
```

---

### 3. Update

Updates Rahul's age from 22 to 23:

```js
User.updateOne({ name: "Rahul" }, { age: 23 })
```

---

### 4. Delete

Deletes Rahul from database:

```js
User.deleteOne({ name: "Rahul" })
```

---

## Expected Output

```txt
MongoDB Connected

User Created:
...

All Users:
...

User Updated:
...

Users After Update:
...

User Deleted:
...

Users After Delete:
[]
```

---

## Concepts Used

- mongoose.connect()
- mongoose.Schema()
- mongoose.model()
- save()
- find()
- updateOne()
- deleteOne()
- async/await
- try/catch

---

## Important Note

This example uses local MongoDB:

```txt
mongodb://127.0.0.1:27017/day14db
```

If you are using MongoDB Atlas, replace the connection string in `server.js`.

---

## Learning Outcomes

After completing this task, students will understand:

- How to connect MongoDB with Node.js
- How to create documents
- How to read documents
- How to update documents
- How to delete documents
- How to use async/await with database operations