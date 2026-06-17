# Day 18 – Deployment Basics

## Learning Objectives

By the end of Day 18, students will:

- Understand deployment.
- Deploy frontend applications.
- Deploy backend applications.
- Use environment variables.
- Connect frontend with backend.
- Host full stack applications online.

---

# What is Deployment?

Deployment means making your application available on the internet.

Before Deployment:

```txt
http://localhost:3000
```

Only works on your computer.

After Deployment:

```txt
https://yourapp.com
```

Anyone can access it.

---

# Why Deployment Matters?

- Share projects with recruiters.
- Share projects with clients.
- Create portfolio projects.
- Host production applications.
- Build real-world experience.

---

# Frontend Deployment Options

## GitHub Pages

Best for:

- HTML
- CSS
- JavaScript

Steps:

1. Push code to GitHub.
2. Open repository settings.
3. Open Pages section.
4. Select main branch.
5. Save.

Site becomes live:

```txt
https://username.github.io/repository-name
```

---

## Netlify

Best for:

- Static websites
- React apps
- Portfolio websites

Features:

- Free hosting
- Auto deployment
- Custom domains
- HTTPS

Website:

https://netlify.com

---

# Backend Deployment Options

## Render

Best for:

- Express.js
- Node.js
- MongoDB

Website:

https://render.com

Features:

- Free tier
- GitHub integration
- Environment variables
- Automatic deployment

---

## Heroku

Popular cloud hosting platform.

Supports:

- Node.js
- Python
- Java
- PHP

Website:

https://heroku.com

---

# Environment Variables

Never write:

```js
const MONGO_URI =
"mongodb+srv://username:password@cluster.mongodb.net";
```

Instead use:

```env
MONGO_URI=your_database_url

JWT_SECRET=your_secret_key
```

---

# Dotenv Package

Install:

```bash
npm install dotenv
```

Use:

```js
require("dotenv").config();
```

Example:

```js
mongoose.connect(
  process.env.MONGO_URI
);
```

---

# Frontend and Backend Connection

Local:

```js
axios.get(
  "http://localhost:5000/users"
);
```

Production:

```js
axios.get(
  "https://your-api.onrender.com/users"
);
```

---

# Full Stack Deployment Flow

Frontend
↓
Netlify

Backend
↓
Render

Database
↓
MongoDB Atlas

All Connected Together

---

# Deployment Checklist

✓ GitHub Repository

✓ Environment Variables

✓ MongoDB Atlas

✓ Render Backend

✓ Netlify Frontend

✓ Live Demo Link

✓ README Updated

---

# Recap

Today we learned:

- Deployment Basics
- GitHub Pages
- Netlify
- Render
- Heroku
- Environment Variables
- Full Stack Deployment