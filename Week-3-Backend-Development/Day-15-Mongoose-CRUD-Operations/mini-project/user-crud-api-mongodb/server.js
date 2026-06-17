const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/day15-user-db")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err.message));

const userSchema = new mongoose.Schema({
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

  age: {
    type: Number,
    min: 1,
    max: 100
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
});

const User = mongoose.model(
  "User",
  userSchema
);

// GET ALL USERS
app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// GET USER BY ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch {
    res.status(400).json({
      message: "Invalid ID"
    });
  }
});

// CREATE USER
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(
      req.body
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// UPDATE USER
app.put("/users/:id", async (req, res) => {
  try {
    const user =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    res.json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "User deleted"
    });
  } catch {
    res.status(400).json({
      message: "Invalid ID"
    });
  }
});

// ASSIGNMENT 1
app.get("/admins", async (req, res) => {
  const admins = await User.find({
    role: "admin"
  });

  res.json(admins);
});

// ASSIGNMENT 2
app.get("/users/average-age", async (req, res) => {
  const result =
    await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: {
            $avg: "$age"
          }
        }
      }
    ]);

  res.json(result);
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});