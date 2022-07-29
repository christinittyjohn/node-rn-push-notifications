const serverless = require("serverless-http");
const express = require("express");
const create = require("./endpoint/create");

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

// create a new endpoint
app.post("/endpoint", create);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
