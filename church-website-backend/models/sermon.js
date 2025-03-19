const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
    theme: String,
    pastor: String,
    date: { type: Date, default: Date.now },
    scripture: String,
    videoUrl: String, // For YouTube/Vimeo links
    notes: String,
  });

  module.exports = mongoose.model("Sermon", sermonSchema);