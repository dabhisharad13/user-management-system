//jslint-ignore-line
//imports
const express = require("express");
const dotenv = require("dotenv");

const app = express();

// importing the config  file
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("CRUD APP");
});

app.listen(PORT, () => {
  console.log("Server running");
});
