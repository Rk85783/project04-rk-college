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
        title: "Sign Up"
      });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = AuthController;
