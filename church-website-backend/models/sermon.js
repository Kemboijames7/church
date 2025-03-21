const mongoose = require("mongoose");
const slugify = require("slugify");

const sermonSchema = new mongoose.Schema({
  theme: { type: String, required: true },
  pastor: { type: String, required: true },
  date: { type: Date, default: Date.now },
  scripture: { type: String, required: true },
  videoUrl: String, // YouTube/Vimeo URL
  notes: String,
  slug: { type: String, unique: true } // New field for URL slugs
  });

  sermonSchema.pre("save", function (next) {
    if (this.isModified("theme")) {
        this.slug = slugify(this.theme, { lower: true, strict: true });
    }
    next();
});

  module.exports = mongoose.model("Sermon", sermonSchema);