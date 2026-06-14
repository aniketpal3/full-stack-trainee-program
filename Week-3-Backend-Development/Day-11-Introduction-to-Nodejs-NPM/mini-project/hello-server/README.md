# Hello Server

## Project Overview

Hello Server is a basic Node.js server built using the built-in HTTP module.

It responds differently based on the route visited by the user.

---

## Features

- `/` route displays welcome message
- `/about` route displays about page message
- `/contact` route displays contact page message
- Invalid route shows 404 message
- Built without Express

---

## Technologies Used

- Node.js
- HTTP module
- JavaScript

---

## Folder Structure

```txt
hello-server/
├── package.json
├── server.js
└── README.md
```

---

## How to Run

Open this folder in terminal:

```bash
cd mini-project/hello-server
```

Run:

```bash
node server.js
```

Or:

```bash
npm start
```

---

## Test in Browser

```txt
http://localhost:3000
```

```txt
http://localhost:3000/about
```

```txt
http://localhost:3000/contact
```

---

## Expected Output

### Home Route

```txt
Welcome to My First Node.js Server
```

### About Route

```txt
About Page
```

### Contact Route

```txt
Contact Page
```

### Invalid Route

```txt
404 Page Not Found
```

---

## Learning Outcomes

After completing this project, students will understand:

- How Node.js creates a server
- How HTTP module works
- How routes work without Express
- How to send responses from backend
- How to test backend in browser