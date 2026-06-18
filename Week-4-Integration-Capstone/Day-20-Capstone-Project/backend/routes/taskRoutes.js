const express = require("express");

const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

// GET LOGGED-IN USER TASKS
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user._id
    }).sort({
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
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, category, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title,
      description,
      category,
      dueDate,
      user: req.user._id
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// UPDATE TASK
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.category = req.body.category ?? task.category;
    task.dueDate = req.body.dueDate ?? task.dueDate;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();

    res.json({
      message: "Task updated successfully",
      task: updatedTask
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE TASK
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

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

// DASHBOARD STATS
router.get("/stats/summary", auth, async (req, res) => {
  try {
    const total = await Task.countDocuments({
      user: req.user._id
    });

    const completed = await Task.countDocuments({
      user: req.user._id,
      completed: true
    });

    const pending = await Task.countDocuments({
      user: req.user._id,
      completed: false
    });

    res.json({
      total,
      completed,
      pending
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;