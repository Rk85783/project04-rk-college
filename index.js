require("dotenv").config();
const express = require("express");
const connectDB = require("./db");

// Database connection
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Rohit");
});

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
