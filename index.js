require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const web = require("./routes/web");

// Database connection
connectDB();

const app = express();

// View Engine
app.set("view engine", "EJS");

app.use(express.static("public"));

app.use("/", web);
// app.use('/api', api);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
