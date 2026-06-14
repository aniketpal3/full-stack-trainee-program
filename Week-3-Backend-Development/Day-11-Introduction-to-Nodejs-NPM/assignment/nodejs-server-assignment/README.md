# Node.js Server Assignment

## Objective

Create a Node.js server that returns current date/time and JSON data using different routes.

---

## Features

- `/` route returns welcome message
- `/time` route returns current formatted date and time
- `/api` route returns JSON data
- Uses `moment` npm package
- Handles invalid routes with 404 message

---

## Technologies Used

- Node.js
- npm
- HTTP module
- Moment package

---

## Folder Structure

```txt
nodejs-server-assignment/
├── package.json
├── server.js
└── README.md
```

---

## Install Dependencies

```bash
npm install
```

Or:

```bash
npm install moment
```

---

## Run Server

```bash
node server.js
```

Or:

```bash
npm start
```

---

## Test Routes

Open browser:

```txt
http://localhost:3001
```

```txt
http://localhost:3001/time
```

```txt
http://localhost:3001/api
```

---

## Expected Output

### Home Route

```txt
Welcome to Node.js Server Assignment
```

### Time Route

```txt
Current Date and Time: June 14th 2026, 11:45:00 AM
```

### API Route

```json
{
  "success": true,
  "message": "JSON data from Node.js server",
  "trainee": "Aniket Pal",
  "course": "Full Stack Trainee Program",
  "day": "Day 11",
  "topic": "Node.js and npm"
}
```

---

## Learning Outcomes

Students learn:

- How to create Node.js server
- How to use built-in HTTP module
- How to install and use npm packages
- How to return text response
- How to return JSON response
- How to handle routes manually