const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/auth");
const HomeController = require("../controllers/HomeController");
const AuthController = require("../controllers/AuthController");

router.get("/", checkAuth, HomeController.home);

router.get("/login", AuthController.login);
router.get("/signup", AuthController.signup);

router.post("/login", AuthController.loginSubmit);
router.post("/signup", AuthController.signupSubmit);
router.get("/logout", AuthController.logout);

module.exports = router;
