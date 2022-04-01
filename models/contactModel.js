const mongoose = require("mongoose");

const contactShema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("contact", contactShema);
