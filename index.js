require("dotenv").config();
const path = require("path");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");

const connectDB = require("./db");
const web = require("./routes/web");

// Database connection
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secret",
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

app.use(cookieParser());

// View Engine
app.set("view engine", "ejs");
// Enable EJS layouts
app.use(expressLayouts);
// Specify where the views are located
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));

app.use("/", web);
// app.use('/api', api);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.info(`App is running at http://localhost:${port}`);
});
