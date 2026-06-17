# Task 1 – Create Users

## Objective

Create 3 users with different names and emails using Mongoose.

---

## Technologies Used

- Node.js
- MongoDB
- Mongoose

---

## Folder Structure

```txt
task-1-create-users/
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

## Users Created

```js
[
  {
    name: "Rahul",
    email: "rahul@example.com",
    age: 22
  },
  {
    name: "Aditi",
    email: "aditi@example.com",
    age: 19
  },
  {
    name: "Aman",
    email: "aman@example.com",
    age: 26
  }
]
```

---

## Concepts Used

- mongoose.connect()
- mongoose.Schema()
- mongoose.model()
- insertMany()
- async/await
- try/catch

---

## Learning Outcome

Students learn how to create multiple MongoDB documents using Mongoose.