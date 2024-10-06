const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    default: "user"
  },
  status: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
