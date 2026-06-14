# Task 4 – Serving Static Files

## Objective

Serve an HTML file from the `public` folder using Express.

---

## What is Static File Serving?

Static files are files such as:

- HTML
- CSS
- JavaScript
- Images

Express can serve them using:

```js
app.use(express.static("public"));
```

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

## Test in Browser

```txt
http://localhost:3003
```

```txt
http://localhost:3003/index.html
```

---

## Expected Output

Browser displays:

```txt
Static File Served by Express
```

---

## Concepts Used

- Express.js
- express.static()
- public folder
- Static HTML file
- path module

---

## Learning Outcome

Students learn how Express serves frontend files from a public directory.