//* Import and setup the server
const express = require("express");
const server = express();

//* Ensure to use the json parse middleware
server.use(express.json());

//* Import and use other global middlewares
const getMiddlewares = require("./middleware/middleware");
server.use(getMiddlewares.logger);

//* Import Routers
const UserRouter = require("./users/users-router");
const PostRouter = require("./posts/posts-router");

//* Setup routers to use
server.use("/api/users", UserRouter);
server.use("/api/posts", PostRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
