//* Function that will allows us to log the request method, request url, and a timestamp
const logger = (req, res, next) => {
  // Console a title to separate each request
  console.log(`\n--- New Request! ---\n`);

  // Console the request method
  console.log("Request Method:", req.method);

  // Console the request URL
  console.log("Request URL:", req.url);

  // Console the request timestamp
  console.log("Request Timestamp:", new Date());
  next();
};

//* Function to check if user ID exists in database
const validateUserId = (userModel) => (req, res, next) => {
  // Get the ID parameter
  const { id } = req.params;

  // Check for the ID
  userModel
    .getById(id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        res
          .status(404)
          .json({ message: `There is no user with ID ${id} in the database` });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//* Function to ensure that the req.body exists, and that at least the name is present
const validateUser = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "missing user data" });
  } else if (!req.body.name || req.body.name === "") {
    res.status(400).json({
      message: "missing required name field, or name field may be empty",
    });
  } else {
    next();
  }
};

const validatePostId = (postModel) => (req, res, next) => {
  const { id } = req.params;

  postModel
    .getById(id)
    .then((post) => {
      if (post) {
        req.post = post;
        next();
      } else {
        res
          .status(404)
          .json({ message: `There is no post with ID ${id} in the database` });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

function validatePost(req, res, next) {
  // do your magic!
}

//* Export all modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePostId,
};
