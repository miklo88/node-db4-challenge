// SERVER FROM SERVER/API/INDEX>JS FILE
const server = require("./api/server");

const host = process.HOST || "localhost";
const port = process.PORT || 9000;

server.listen(port, () => {
  console.log(`Listening on http://${host}:${port}`);
});
