const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Rohit");
});

app.listen(4000, () => {
  console.log("App is running at port 4000");
});