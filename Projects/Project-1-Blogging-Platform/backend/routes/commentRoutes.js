const express = require("express");

const Comment = require("../models/Comment");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

// PRIVATE: ADD COMMENT TO POST
router.post("/:postId", auth, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Comment text is required"
      });
    }

    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    const comment = await Comment.create({
      text,
      post: req.params.postId,
      user: req.user._id
    });

    const populatedComment = await comment.populate("user", "name email");

    res.status(201).json({
      message: "Comment added successfully",
      comment: populatedComment
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid post ID"
    });
  }
});

// PRIVATE: DELETE OWN COMMENT
router.delete("/:id", auth, async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found or not authorized"
      });
    }

    res.json({
      message: "Comment deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid comment ID"
    });
  }
});

module.exports = router;