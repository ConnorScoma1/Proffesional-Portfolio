const express = require("express");
const app = express();
const port = 8080;
var path = require("path");

app.use(express.static("public"));

// viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/view.html"));
});

// Viewed At http://localhost:8080/about
app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/about.html"));
});

// Viewed At http://localhost:8080/work
app.get("/work", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/work.html"));
});

// Viewed At http://localhost:8080/contact
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/contact.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
