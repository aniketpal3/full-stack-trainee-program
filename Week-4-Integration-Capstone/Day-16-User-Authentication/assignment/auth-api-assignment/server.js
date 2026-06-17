const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 4000;

const JWT_SECRET = "secretkey";

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/day16-auth-assignment-db")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error.message));

const blacklistedTokens = [];

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+@.+\..+/
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

function auth(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      message: "No token, access denied"
    });
  }

  if (blacklistedTokens.includes(token)) {
    return res.status(401).json({
      message: "Token has been logged out"
    });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);

    req.user = verified;
    req.token = token;

    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid token"
    });
  }
}

function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin only."
    });
  }

  next();
}

app.get("/", (req, res) => {
  res.json({
    message: "Day 16 Auth API Assignment"
  });
});

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user"
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    res.json({
      message: "Login successful",
      token
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// PROFILE PROTECTED ROUTE
app.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// ADMIN PROTECTED ROUTE
app.get("/admin", auth, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin. You can access this route."
  });
});

// LOGOUT ROUTE
app.post("/logout", auth, (req, res) => {
  blacklistedTokens.push(req.token);

  res.json({
    message: "Logout successful. Token blacklisted."
  });
});

app.listen(PORT, () => {
  console.log(`Auth assignment server running at http://localhost:${PORT}`);
});