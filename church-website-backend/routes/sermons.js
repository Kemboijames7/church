const express = require("express");
const Sermon = require("../models/Sermon");
const router = express.Router();

// Get all sermons
router.get("/", async (req, res) => {
  try {
    const sermons = await Sermon.find();
    res.json(sermons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single sermon by ID
router.get("/:id", async (req, res) => {
  try {
    const sermon = await Sermon.findById(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: "Sermon not found" });
    }
    res.json(sermon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

