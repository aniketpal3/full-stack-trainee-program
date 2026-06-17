# Mini Project – Deploy Full Stack App

## Project Overview

Deploy the User Dashboard Full Stack Application online.

Frontend:

```txt
Netlify
```

Backend:

```txt
Render
```

Database:

```txt
MongoDB Atlas
```

---

# Architecture

```txt
Frontend (Netlify)
        ↓
Backend API (Render)
        ↓
MongoDB Atlas
```

---

# Step 1 – Deploy Backend

Repository Example:

```txt
user-dashboard-api
```

Backend Requirements:

- Express
- MongoDB
- Mongoose
- CORS
- dotenv

Render Settings:

Build Command:

```txt
npm install
```

Start Command:

```txt
node server.js
```

Environment Variables:

```txt
MONGO_URI

JWT_SECRET

PORT
```

Deploy.

Example:

```txt
https://user-dashboard-api.onrender.com
```

---

# Step 2 – Test Backend

Open:

```txt
https://user-dashboard-api.onrender.com/users
```

Expected:

```json
[
  {
    "name": "Rahul"
  }
]
```

---

# Step 3 – Deploy Frontend

Repository Example:

```txt
user-dashboard-frontend
```

Netlify:

```txt
Add New Site
↓
Import Existing Project
↓
GitHub
↓
Deploy
```

Example:

```txt
https://user-dashboard.netlify.app
```

---

# Step 4 – Update API URLs

Before:

```js
const API_URL =
"http://localhost:5000";
```

After:

```js
const API_URL =
"https://user-dashboard-api.onrender.com";
```

---

# Step 5 – Enable CORS

Backend:

```js
const cors =
require("cors");

app.use(
  cors({
    origin:
      "https://user-dashboard.netlify.app"
  })
);
```

---

# Step 6 – Test Application

Verify:

✓ Load Users

✓ Add User

✓ Update User

✓ Delete User

✓ Search User

✓ Authentication

---

# Final Deliverables

Frontend URL:

```txt
https://user-dashboard.netlify.app
```

Backend URL:

```txt
https://user-dashboard-api.onrender.com
```

GitHub Frontend Repo:

```txt
https://github.com/username/frontend
```

GitHub Backend Repo:

```txt
https://github.com/username/backend
```

---

# Portfolio Section

Add project to portfolio.

Example:

Project Name:

```txt
User Dashboard Full Stack Application
```

Tech Stack:

```txt
HTML
CSS
JavaScript
Axios
Node.js
Express.js
MongoDB
JWT
Render
Netlify
```

---

# Resume Point

Built and deployed a Full Stack User Dashboard application using Node.js, Express.js, MongoDB, JWT Authentication, Render, and Netlify with complete CRUD functionality and frontend-backend integration.

---

# Learning Outcome

Students learn:

- Production deployment
- Full stack hosting
- Netlify
- Render
- MongoDB Atlas
- Environment variables
- Live application management