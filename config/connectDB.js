const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("bd is connected");
  } catch (error) {
    console.log("no connection");
  }
};
module.exports = connectDB;
