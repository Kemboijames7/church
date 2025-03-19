const express = require("express");
const Sermon = require("../models/sermon");
const router = express.Router();

// Get all sermons
router.get("/", async (req, res) => {
  const sermons = await Sermon.find();
  res.json(sermons);
});

// Add a sermon
router.post("/", async (req, res) => {
  const newSermon = new Sermon(req.body);
  await newSermon.save();
  res.json(newSermon);
});

module.exports = router;
