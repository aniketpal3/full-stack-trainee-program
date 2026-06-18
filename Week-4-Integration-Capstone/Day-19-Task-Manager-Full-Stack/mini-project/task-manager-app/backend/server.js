const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Task = require("./models/Task");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-fullstack-db")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error.message));

app.get("/", (req, res) => {
  res.json({
    message: "Task Manager Full Stack API"
  });
});

// GET ALL TASKS
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// CREATE TASK
app.post("/tasks", async (req, res) => {
  try {
    const { title, category, userId } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title,
      category,
      userId
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// UPDATE TASK
app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({
      message: "Invalid task ID"
    });
  }
});

// DELETE TASK
app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid task ID"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Task Manager API running at http://localhost:${PORT}`);
});