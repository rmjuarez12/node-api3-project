//* Import express and setup Router
const express = require("express");
const router = express.Router();

//* Import the user model
const User = require("./users-model");

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

router.delete("/:id", getMiddlewares.validateUserId(User), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.put("/:id", getMiddlewares.validateUserId(User), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.post("/:id/posts", getMiddlewares.validateUserId(User), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get("/:id/posts", getMiddlewares.validateUserId(User), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

//* Export the module
module.exports = router;
