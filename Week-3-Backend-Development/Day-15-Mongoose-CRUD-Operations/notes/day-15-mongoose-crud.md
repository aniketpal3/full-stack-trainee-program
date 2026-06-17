# Day 15 – CRUD Operations with MongoDB (Mongoose In-Depth)

## Learning Objectives

By the end of Day 15, students will:

- Understand Mongoose schemas and models.
- Perform CRUD operations using MongoDB.
- Use query filters.
- Apply Mongoose validation.
- Build a User CRUD API with MongoDB.

---

## What is CRUD?

CRUD stands for:

- Create
- Read
- Update
- Delete

These are the four basic operations used in database applications.

---

## Mongoose Schema

A schema defines the structure of documents.

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 1
  }
});
```

---

## Mongoose Model

A model is used to interact with the database collection.

```js
const User = mongoose.model("User", userSchema);
```

---

## CREATE Operation

```js
const user = new User({
  name: "Rahul",
  email: "rahul@example.com",
  age: 22
});

await user.save();
```

---

## READ Operation

```js
const users = await User.find();
```

---

## READ With Filter

```js
const adults = await User.find({
  age: {
    $gte: 18
  }
});
```

---

## UPDATE Operation

```js
await User.updateOne(
  { email: "rahul@example.com" },
  { age: 23 }
);
```

---

## DELETE Operation

```js
await User.deleteOne({
  email: "rahul@example.com"
});
```

---

## Query Operators

```js
$gt
$gte
$lt
$lte
$or
```

Example:

```js
User.find({
  age: {
    $gte: 18,
    $lte: 30
  }
});
```

---

## Validation

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/
  },
  age: {
    type: Number,
    min: 1,
    max: 100
  }
});
```

---

## Recap

Today we learned:

- Mongoose Schema
- Mongoose Model
- Create
- Read
- Update
- Delete
- Query filters
- Validation