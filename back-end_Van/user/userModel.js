const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  CFname: { type: String, required: true },
  CLname: { type: String, required: true, unique: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: { type: String,required: true },
});

module.exports = mongoose.model("User", userSchema);
