const express = require("express");
const router = express.Router();
const Sermon = require("../models/Sermon");

// Get all sermons
router.get("/sermons", async (req, res) => {
    try {
        const sermons = await Sermon.find();
        res.json(sermons);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch sermons" });
    }
});

// Get a single sermon by slug
router.get("/sermon/:slug", async (req, res) => {
    try {
     
        const sermon = await Sermon.findOne({ slug: req.params.slug });
        if (!sermon) {
       
            return res.status(404).json({ error: "Sermon not found" });
        }
        res.json(sermon);
    } catch (err) {
      console.error("❌ Error fetching sermon:", err);
        res.status(500).json({ error: "Failed to fetch sermon" });
    }
});

module.exports = router;
