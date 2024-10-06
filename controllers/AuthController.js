const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User");

class AuthController {
  static login = async (req, res) => {
    try {
      res.render("login", {
        title: "Login",
        successMsg: req.flash("success"),
        errorMsg: req.flash("error")
      });
    } catch (error) {
      console.log(error);
    }
  };

  static loginSubmit = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        req.flash("error", "All field are Required");
        return res.redirect("/login");
      }

      const user = await UserModel.findOne({ email });
      if (!user) {
        req.flash("error", "User not found");
        return res.redirect("/login");
      }

      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        req.flash("error", "Invalid credentials");
        return res.redirect("/login");
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_PRIVATE_KEY);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  static signup = async (req, res) => {
    try {
      res.render("signup", {
        title: "Sign Up",
        successMsg: req.flash("success"),
        errorMsg: req.flash("error")
      });
    } catch (error) {
      console.log(error);
    }
  };

  static signupSubmit = async (req, res) => {
    try {
      // console.log(req.body);
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        req.flash("error", "All field are Required");
        return res.redirect("/signup");
      }

      const user = await UserModel.findOne({ email });
      if (user) {
        req.flash("error", "User already exists");
        return res.redirect("/signup");
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({
        firstName,
        lastName,
        email,
        password: hashPassword
      });
      console.log(newUser);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  static logout = async (req, res) => {
    try {
      res.clearCookie('token');
      res.redirect('/login');
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = AuthController;
