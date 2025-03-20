const mongoose = require("mongoose");

const prayerSchema = new mongoose.Schema({
  name: String,
  Topic: String,
  email: String,
  phone: Number,
  message: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Biblestudy",bibleSchema);
