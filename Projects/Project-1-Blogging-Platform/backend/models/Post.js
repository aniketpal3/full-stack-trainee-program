const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 10
    },

    category: {
      type: String,
      default: "General",
      trim: true
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);