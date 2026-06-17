# Task 6 – Mongoose Validation

## Objective

Test validation rules in Mongoose schema.

---

## Practice Tasks

- Try creating a user without a name.
- Try creating a user with invalid email.
- Create one valid user.

---

## Install

```bash
npm install
```

---

## Run

```bash
node server.js
```

---

## Validation Rules

```js
name: required, minlength 3
email: required, must match email pattern
age: min 1, max 100
```

---

## Expected Output

```txt
Validation Error 1:
Path `name` is required.

Validation Error 2:
Path `email` is invalid.

Valid User Saved:
...
```

---

## Concepts Used

- required
- minlength
- match
- min
- max
- validation errors

---

## Learning Outcome

Students learn how to protect database quality using Mongoose validators.