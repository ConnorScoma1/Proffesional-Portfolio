const express = require("express");
const app = express();
const port = 8080;
var path = require("path");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/view.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
