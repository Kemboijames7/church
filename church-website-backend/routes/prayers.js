const express = require("express");
const PrayerRequest = require("../models/PrayerRequest");
const router = express.Router();

// Get all prayer requests
router.get("/", async (req, res) => {
  const prayers = await PrayerRequest.find();
  res.json(prayers);
});

// Submit a prayer request
router.post("/", async (req, res) => {
  const newPrayer = new PrayerRequest(req.body);
  await newPrayer.save();
  res.json(newPrayer);
});

module.exports = router;
