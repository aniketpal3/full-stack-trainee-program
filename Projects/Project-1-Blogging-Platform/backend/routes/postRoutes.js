const express = require("express");

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const auth = require("../middleware/auth");

const router = express.Router();

// PUBLIC: GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// PUBLIC: GET SINGLE POST WITH COMMENTS
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    const comments = await Comment.find({
      post: req.params.id
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json({
      post,
      comments
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid post ID"
    });
  }
});

// PRIVATE: GET MY POSTS
router.get("/my/posts", auth, async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.user._id
    }).sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// PRIVATE: CREATE POST
router.post("/", auth, async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required"
      });
    }

    const post = await Post.create({
      title,
      content,
      category,
      author: req.user._id
    });

    res.status(201).json({
      message: "Post created successfully",
      post
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// PRIVATE: UPDATE OWN POST
router.put("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      author: req.user._id
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or not authorized"
      });
    }

    post.title = req.body.title ?? post.title;
    post.content = req.body.content ?? post.content;
    post.category = req.body.category ?? post.category;

    const updatedPost = await post.save();

    res.json({
      message: "Post updated successfully",
      post: updatedPost
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid post ID"
    });
  }
});

// PRIVATE: DELETE OWN POST
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      author: req.user._id
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or not authorized"
      });
    }

    await Comment.deleteMany({
      post: req.params.id
    });

    res.json({
      message: "Post deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid post ID"
    });
  }
});

module.exports = router;