# Task 1 – Get Single User by ID

## Objective

Create an API route that returns a user using their ID.

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

## Test Routes

Home:

```txt
http://localhost:3000
```

Get User:

```txt
http://localhost:3000/users/1
```

Output:

```json
{
  "id": 1,
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

---

Example:

```txt
http://localhost:3000/users/2
```

Output:

```json
{
  "id": 2,
  "name": "Aditi",
  "email": "aditi@example.com"
}
```

---

Invalid User:

```txt
http://localhost:3000/users/100
```

Output:

```json
{
  "message": "User not found"
}
```

Status Code:

```txt
404
```

---

## Concepts Used

- Express.js
- Route Parameters
- JSON Response
- Error Handling

---

## Learning Outcome

Students learn how to fetch a single resource using a dynamic route.