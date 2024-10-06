const bcrypt = require('bcrypt')

const UserModel = require("../models/User");

class AuthController {
  
  static login = async (req, res) => {
    try {
      res.render("login", {
        title: "Login"
      });
    } catch (error) {
      console.log(error);
    }
  };

  static signup = async (req, res) => {
    try {
      res.render("signup", {
        title: "Sign Up",
        successMsg: req.flash('success'),
        errorMsg: req.flash('error')
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  static signupSubmit = async (req, res) => {
    try {
      // console.log(req.body);
      const { firstName, lastName, email, password } = req.body
      
      if (!firstName || !lastName || !email || !password) {
        req.flash('error', 'All field are Required')
        return res.redirect('/signup')
      }

      const user = await UserModel.findOne({ email });
      if (user) { 
        req.flash('error', 'User already exists')
        return res.redirect('/signup')
      }

      const hashPassword = await bcrypt.hash(req.body.password, 10)
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
}
module.exports = AuthController;
