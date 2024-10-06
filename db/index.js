const mongoose = require("mongoose");

const connectDB = async () => {
  return await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.info("DB Connection Successfully");
  }).catch((err) => {
    console.error(err);
  });
};
module.exports = connectDB;
