import express from "express";
let server = express();
let port = 3004;

server.listen(port, () => {
  console.log("server is running on port:", port);
});
