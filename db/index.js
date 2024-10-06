const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB Connection Successfully')
  }).catch((err) => {
    console.log(err)
  })
}
module.exports = connectDB