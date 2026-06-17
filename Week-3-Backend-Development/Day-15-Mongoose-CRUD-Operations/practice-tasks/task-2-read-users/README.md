# Task 2 – Read Users

## Objective

Fetch users from MongoDB using Mongoose queries.

---

## Practice Tasks

- Fetch all users younger than 25.
- Fetch one user by email.

---

## Technologies Used

- Node.js
- MongoDB
- Mongoose

---

## Folder Structure

```txt
task-2-read-users/
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
day15-crud-db
```

---

## Queries Used

### Find All Users

```js
User.find()
```

### Users Younger Than 25

```js
User.find({
  age: {
    $lt: 25
  }
});
```

### Find One User By Email

```js
User.findOne({
  email: "rahul@example.com"
});
```

---

## Important Note

Run Task 1 first so users are inserted into the database.

---

## Learning Outcome

Students learn how to read documents and filter records using Mongoose.