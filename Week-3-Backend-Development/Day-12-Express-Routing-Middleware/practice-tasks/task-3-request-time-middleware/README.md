# Task 3 – Request Time Middleware

## Objective

Create middleware that logs the time of each request.

---

## What is Middleware?

Middleware is a function that runs before the final route handler.

It can be used for:

- Logging
- Authentication
- Error handling
- Request body parsing

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

---

## Test Routes

```txt
http://localhost:3002
```

```txt
http://localhost:3002/about
```

```txt
http://localhost:3002/contact
```

---

## Expected Terminal Output

```txt
Request Time: 14/06/2026, 12:00:00 pm
Method: GET
URL: /
```

---

## Concepts Used

- Express.js
- Middleware
- app.use()
- req.method
- req.url
- next()

---

## Learning Outcome

Students learn how middleware works before route handlers.