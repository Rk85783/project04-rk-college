class HomeController {
  static home = async (req, res) => {
    try {
      res.render("home", {
        title: "Home"
      });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = HomeController;
