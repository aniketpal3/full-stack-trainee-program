const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    completed: {
      type: Boolean,
      default: false
    },

    category: {
      type: String,
      enum: ["Work", "Personal", "Urgent", "General"],
      default: "General"
    },

    userId: {
      type: String,
      default: "guest"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);