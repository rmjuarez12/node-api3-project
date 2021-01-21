//* Import the server
const server = require("./api/server");

//* Specify the port to listen to
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`\n--- Server Running on http://localhost:${PORT} ---\n`);
});
