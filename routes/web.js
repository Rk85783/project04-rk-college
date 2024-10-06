const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController");
const AuthController = require("../controllers/AuthController");

router.get("/", HomeController.home);

router.get("/login", AuthController.login);
router.get("/signup", AuthController.signup);

router.post("/login", AuthController.loginSubmit);
router.post("/signup", AuthController.signupSubmit);

module.exports = router;
