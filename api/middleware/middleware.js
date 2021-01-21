//* Function that will allows us to log the request method, request url, and a timestamp
function logger(req, res, next) {
  //* Console the request method
  console.log("Request Method:", req.method);

  //* Console the request URL
  console.log("Request URL:", req.url);

  //* Console the request timestamp
  console.log("Request Timestamp:", new Date());

  next();
}

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePostId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

//* Export all modules
module.exports = {
  logger,
  validateUserId,
};
