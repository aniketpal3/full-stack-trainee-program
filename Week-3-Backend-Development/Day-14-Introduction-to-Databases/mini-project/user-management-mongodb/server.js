const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/day14-user-management-db";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error.message));

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.json({
    message: "User Management API with MongoDB"
  });
});

// CREATE USER
app.post("/users", async (req, res) => {
  try {
    const { name, email, age, isActive } = req.body;

    if (!name || !email || age === undefined) {
      return res.status(400).json({
        message: "Name, email and age are required"
      });
    }

    const user = new User({
      name,
      email,
      age,
      isActive
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET ALL USERS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET ACTIVE USERS
app.get("/users/active", async (req, res) => {
  try {
    const activeUsers = await User.find({
      isActive: true
    });

    res.json(activeUsers);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET USERS OLDER THAN MIN AGE
app.get("/users/age/:min", async (req, res) => {
  try {
    const minAge = Number(req.params.min);

    if (Number.isNaN(minAge)) {
      return res.status(400).json({
        message: "Minimum age must be a number"
      });
    }

    const users = await User.find({
      age: {
        $gt: minAge
      }
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET SINGLE USER
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: "Invalid user ID"
    });
  }
});

// UPDATE USER
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid user ID"
    });
  }
});

app.listen(PORT, () => {
  console.log(`User API running at http://localhost:${PORT}`);
});