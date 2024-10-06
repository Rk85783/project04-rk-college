require("dotenv").config();
const express = require("express");
let flash = require('connect-flash');
const session = require('express-session');
const connectDB = require("./db");
const web = require("./routes/web");

// Database connection
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// View Engine
app.set("view engine", "EJS");

app.use(express.static("public"));

app.use("/", web);
// app.use('/api', api);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
