//jslint-ignore-line
//imports
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser"); //an npm module used to process data sent in an HTTP request body.
const path = require("path");

const app = express();

// importing the config  file
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

/*
set view engine
allow us to render web pages using template files
*/
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "/assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "/assets/js")));

app.get("/", (req, res) => {
  res.send("CRUD APP");
});

app.listen(PORT, () => {
  console.log("Server running");
});
