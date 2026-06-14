# Day 12 – Building a Server with Express.js (Routing, Middleware)

## Learning Objectives

By the end of Day 12, students will:

- Understand Express.js
- Create Express servers
- Learn Routing
- Learn Middleware
- Serve Static Files
- Build APIs
- Build Express Info Server

---

# What is Express.js?

Express.js is a lightweight Node.js framework.

It simplifies:

- Routing
- Middleware
- APIs
- Server Development

---

# Why Use Express?

Without Express:

```js
const http = require("http");
```

Many lines of code are required.

With Express:

```js
const express = require("express");
```

Server creation becomes much easier.

---

# Installing Express

Initialize project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

---

# Basic Express Server

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000);
```

---

# Routing

Routing means handling URLs.

Examples:

```txt
/
```

```txt
/about
```

```txt
/contact
```

---

# Route Parameters

```js
app.get("/user/:id", (req, res) => {
  res.send(req.params.id);
});
```

Example:

```txt
/user/101
```

Output:

```txt
101
```

---

# Query Parameters

```js
app.get("/search", (req, res) => {
  res.send(req.query.q);
});
```

Example:

```txt
/search?q=nodejs
```

Output:

```txt
nodejs
```

---

# Middleware

Middleware runs before routes.

Example:

```js
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
```

---

# Built-in Middleware

```js
app.use(express.json());
```

Used for parsing JSON requests.

---

# Static Files

```js
app.use(express.static("public"));
```

Allows serving:

```txt
index.html
style.css
script.js
```

directly from browser.

---

# Recap

Today we learned:

- Express.js
- Routing
- Route Parameters
- Query Parameters
- Middleware
- Static Files