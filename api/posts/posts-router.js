//* Import express and setup router
const express = require("express");
const { mountpath } = require("../server");
const router = express.Router();

//* Import the Posts model
const Post = require("./posts-model");

//* Import Middlewares
const getMiddlewares = require("../middleware/middleware");

//* Endpoint Handlers

// GET - Get all posts
router.get("/", (req, res) => {
  Post.get().then((posts) => {
    res.status(200).json(posts);
  });
});

router.get("/:id", getMiddlewares.validatePostId(Post), (req, res) => {
  const post = req.post;

  res.status(200).json(post);
});

router.delete("/:id", getMiddlewares.validatePostId(Post), (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put("/:id", getMiddlewares.validatePostId(Post), (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

//* Export the router
module.exports = router;
