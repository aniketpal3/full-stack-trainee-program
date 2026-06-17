# Practice Task 4

## Objective

Move sensitive information to environment variables.

---

# Why Use Environment Variables?

Never do this:

```js
const JWT_SECRET =
"mysecret";

const MONGO_URI =
"mongodb+srv://username:password@cluster.mongodb.net";
```

Anyone can see it on GitHub.

---

# Install Dotenv

```bash
npm install dotenv
```

---

# Create .env

```env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb

JWT_SECRET=mysecret
```

---

# Add to .gitignore

```txt
node_modules/

.env
```

Never upload:

```txt
.env
```

to GitHub.

---

# Load Environment Variables

server.js

```js
require("dotenv").config();
```

---

# Use Variables

Before:

```js
mongoose.connect(
  "mongodb://127.0.0.1:27017/mydb"
);
```

After:

```js
mongoose.connect(
  process.env.MONGO_URI
);
```

---

# JWT Example

Before:

```js
jwt.sign(
  payload,
  "secretkey"
);
```

After:

```js
jwt.sign(
  payload,
  process.env.JWT_SECRET
);
```

---

# PORT Example

Before:

```js
const PORT = 5000;
```

After:

```js
const PORT =
  process.env.PORT || 5000;
```

---

# Render Environment Variables

Render Dashboard:

```txt
Settings
↓
Environment
↓
Add Variable
```

Add:

```txt
MONGO_URI

JWT_SECRET

PORT
```

---

# Production Example

server.js

```js
require("dotenv").config();

const express =
require("express");

const mongoose =
require("mongoose");

const app =
express();

mongoose
.connect(
  process.env.MONGO_URI
);

const PORT =
process.env.PORT ||
5000;

app.listen(PORT);
```

---

# Verification Checklist

✓ .env created

✓ dotenv installed

✓ .gitignore updated

✓ Mongo URI removed from code

✓ JWT secret removed from code

✓ Render variables configured

---

# Learning Outcome

Students learn:

- Environment variables
- Dotenv package
- Security best practices
- Production deployment setup