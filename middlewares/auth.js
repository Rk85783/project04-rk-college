const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  // if (!token) {
  //   req.flash('error', 'Unauthorized User Please Login')
  //   res.redirect('/login')
  // }
  // const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  // req.user = await UserModel.findById(decoded._id);
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = await UserModel.findById(decoded.userId);
  }
  next();
};
module.exports = checkAuth;
