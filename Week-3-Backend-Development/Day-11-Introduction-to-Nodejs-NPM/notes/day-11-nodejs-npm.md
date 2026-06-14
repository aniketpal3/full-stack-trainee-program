# Day 11 – Introduction to Node.js & npm

## Learning Objectives

By the end of Day 11, students will:

- Understand Node.js.
- Understand npm.
- Install Node.js and npm.
- Run JavaScript outside browser.
- Create first Node.js program.
- Create simple HTTP server.
- Build Hello Server project.

---

# What is Node.js?

Node.js is a JavaScript Runtime Environment.

It allows JavaScript to run outside the browser.

Before Node.js:

JavaScript only worked inside browsers.

After Node.js:

JavaScript can run:

- Servers
- APIs
- Backend Applications
- Command Line Tools

---

# Why Node.js?

Benefits:

- Fast
- Scalable
- Non-blocking
- Event Driven
- Huge Package Ecosystem

Popular Companies:

- Netflix
- LinkedIn
- PayPal
- Uber

---

# Node.js Architecture

Node.js uses:

- V8 Engine (Google Chrome)
- Event Loop
- Non-blocking I/O

This allows handling thousands of requests efficiently.

---

# What is npm?

npm = Node Package Manager

Used to:

- Install Packages
- Manage Dependencies
- Run Scripts

Official Website:

https://www.npmjs.com

---

# Verify Installation

```bash
node -v

npm -v
```

Example Output:

```txt
v22.17.0
10.9.2
```

---

# Create First Program

Create:

```txt
app.js
```

Code:

```js
console.log("Hello Node.js");
```

Run:

```bash
node app.js
```

Output:

```txt
Hello Node.js
```

---

# Initialize Node Project

```bash
npm init -y
```

Creates:

```txt
package.json
```

---

# Install Package

```bash
npm install lodash
```

---

# Import Package

```js
const _ = require("lodash");
```

---

# Simple HTTP Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Server");
});

server.listen(3000);
```

---

# Recap

Today we learned:

- Node.js
- npm
- package.json
- Installing packages
- First Node Program
- HTTP Server