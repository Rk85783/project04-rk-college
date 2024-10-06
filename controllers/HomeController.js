class HomeController {
  static home = async (req, res) => {
    try {
      res.render("home", {
        title: "Home",
        authUser: req.user
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = HomeController;
