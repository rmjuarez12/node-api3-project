//* Import express and setup Router
const express = require("express");
const router = express.Router();

//* Import Models
const User = require("./users-model");
const Post = require("../posts/posts-model");

//* Import Middlewares
const getMiddlewares = require("../middleware/middleware");

//* Endpoint handlers

// POST - Create a new user
router.post("/", getMiddlewares.validateUser, (req, res) => {
  const userData = req.body;

  User.insert(userData)
    .then((newUSer) => {
      res.status(201).json(newUSer);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET - Get all users
router.get("/", (req, res) => {
  User.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET - Get a user by ID
router.get("/:id", getMiddlewares.validateUserId(User), (req, res) => {
  res.status(200).json(req.user);
});

// DELETE - Delete a specific user
router.delete("/:id", getMiddlewares.validateUserId(User), (req, res) => {
  const user = req.user;

  User.remove(user.id)
    .then(() => {
      res
        .status(200)
        .json({ message: `The user ${user.name} has been removed` });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PUT - Update a specific user's data
router.put(
  "/:id",
  [getMiddlewares.validateUserId(User), getMiddlewares.validateUser],
  (req, res) => {
    const user = req.user;

    User.update(user.id, req.body)
      .then(() => {
        res.status(200).json({
          message: `The user ${user.name}'s name has been updated to ${req.body.name}`,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

router.post(
  "/:id/posts",
  [getMiddlewares.validateUserId(User), getMiddlewares.validatePost],
  (req, res) => {
    const userId = req.params.id;

    const newPost = {
      text: req.body.text,
      user_id: userId,
    };

    Post.insert(newPost)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

// GET - Get all posts from a specific user
router.get("/:id/posts", getMiddlewares.validateUserId(User), (req, res) => {
  const user = req.user;

  User.getUserPosts(user.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export the module
module.exports = router;
