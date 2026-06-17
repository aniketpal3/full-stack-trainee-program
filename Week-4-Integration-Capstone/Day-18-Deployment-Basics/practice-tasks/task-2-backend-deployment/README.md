# Practice Task 2

## Objective

Deploy Day 16 Auth API on Render.

---

# Step 1

Push backend project to GitHub.

Example:

```bash
git add .

git commit -m "Auth API"

git push origin main
```

---

# Step 2

Create account:

https://render.com

---

# Step 3

Click:

```txt
New
↓
Web Service
```

---

# Step 4

Connect GitHub Repository.

Select:

```txt
Day 16 Auth API Repository
```

---

# Step 5

Configure

Build Command:

```txt
npm install
```

Start Command:

```txt
node server.js
```

---

# Step 6

Add Environment Variables

Example:

```txt
MONGO_URI

JWT_SECRET
```

---

# Step 7

Deploy

Render generates:

```txt
https://your-app.onrender.com
```

---

# Example API Test

```txt
https://your-app.onrender.com/profile
```

---

# Deliverable

Share:

```txt
Render URL

GitHub Repository URL
```

---

# Learning Outcome

Students learn:

- Backend deployment
- Render hosting
- Environment variables
- Production APIs