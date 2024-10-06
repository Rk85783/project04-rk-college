const mongoose = require("mongoose");

const connectDB = async () => {
  return await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connection Successfully");
  }).catch((err) => {
    console.log(err);
  });
};
module.exports = connectDB;
