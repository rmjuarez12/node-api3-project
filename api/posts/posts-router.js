//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import Models
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
  const post = req.post;

  Post.remove(post.id)
    .then(() => {
      res.status(200).json({ message: "Post has been deleted!" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put(
  "/:id",
  [getMiddlewares.validatePostId(Post), getMiddlewares.validatePost],
  (req, res) => {
    const postID = req.params.id;
    const editedData = req.body;

    Post.update(postID, editedData)
      .then(() => {
        res.status(200).json({ message: "Post has been edited successfully!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

//* Export the router
module.exports = router;
