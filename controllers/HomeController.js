class HomeController {
  static home = async (req, res) => {
    try {
      console.log(req.user)
      res.render("home", {
        title: "Home",
        authUser: req.user || null
      });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = HomeController;
