const express = require("express");
const app = express();

const as = app.get("/", (request, response) => {
  response.send("Express JS");
});

module.exports = as;
