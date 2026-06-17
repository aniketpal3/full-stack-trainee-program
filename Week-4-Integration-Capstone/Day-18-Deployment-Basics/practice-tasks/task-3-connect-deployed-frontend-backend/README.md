# Practice Task 3

## Objective

Connect deployed frontend with deployed backend.

---

# Before Deployment

Frontend:

```js
axios.get(
  "http://localhost:5000/users"
);
```

This only works locally.

---

# After Deployment

Backend URL Example:

```txt
https://user-api.onrender.com
```

Frontend Code:

```js
axios.get(
  "https://user-api.onrender.com/users"
);
```

---

# Example

Before:

```js
const API_URL =
  "http://localhost:5000";
```

After:

```js
const API_URL =
  "https://your-app.onrender.com";
```

---

# Update Login Request

Before:

```js
axios.post(
  "http://localhost:5000/login"
);
```

After:

```js
axios.post(
  "https://your-app.onrender.com/login"
);
```

---

# Update Profile Request

Before:

```js
axios.get(
  "http://localhost:5000/profile"
);
```

After:

```js
axios.get(
  "https://your-app.onrender.com/profile"
);
```

---

# Enable CORS

Install:

```bash
npm install cors
```

Backend:

```js
const cors =
  require("cors");

app.use(cors());
```

---

# Production CORS

```js
app.use(
  cors({
    origin:
      "https://your-site.netlify.app"
  })
);
```

---

# Testing

Frontend URL:

```txt
https://your-site.netlify.app
```

Backend URL:

```txt
https://your-app.onrender.com
```

Verify:

✓ Login works

✓ Signup works

✓ CRUD works

✓ Dashboard loads

---

# Deliverable

Share:

Frontend URL

Backend URL

GitHub Repository URL

---

# Learning Outcome

Students learn:

- Frontend backend connection
- Production API URLs
- CORS configuration
- Full Stack deployment