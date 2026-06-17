# Day 17 – Connecting Frontend with Backend

## Learning Objectives

By the end of Day 17, students will:

- Understand how frontend communicates with backend.
- Use Fetch API to send HTTP requests.
- Use Axios to make API calls.
- Handle GET, POST, PUT, DELETE from frontend.
- Store and send JWT tokens.
- Build a User Dashboard.

---

## Frontend and Backend Communication

Frontend sends a request.

Backend processes the request.

Backend sends a response.

Example:

```txt
Frontend → GET /users → Backend
Backend → JSON users → Frontend
```

---

## HTTP Methods

```txt
GET     Fetch data
POST    Create data
PUT     Update data
DELETE  Remove data
```

---

## Fetch API

Fetch is built into JavaScript.

### GET Example

```js
fetch("http://localhost:5000/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### POST Example

```js
fetch("http://localhost:5000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Rahul",
    email: "rahul@example.com"
  })
});
```

---

## Axios

Axios is a popular HTTP client.

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### GET Example

```js
axios.get("http://localhost:5000/users")
  .then(res => console.log(res.data));
```

### POST Example

```js
axios.post("http://localhost:5000/users", {
  name: "Aditi",
  email: "aditi@example.com"
});
```

---

## JWT in Frontend

After login, backend returns token.

Save token:

```js
localStorage.setItem("token", token);
```

Send token:

```js
const token = localStorage.getItem("token");

axios.get("http://localhost:5000/profile", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

---

## Recap

Today we learned:

- Frontend-backend connection
- Fetch API
- Axios
- CRUD requests
- JWT token handling
- Frontend dashboard integration