require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const sermonRoutes = require("./routes/sermon");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  app.use("/", sermonRoutes);

  app.get("/", (req, res) => {
    res.send("Welcome to Aic Fellowship Annex Church Website API!  gngghg");
  });

// API to Fetch Sermons
app.get("/sermons", async (req, res) => {
  try {
      const sermons = await Sermon.find();
      res.json(sermons);
  } catch (err) {
      res.status(500).json({ error: "Server error" });
  }
});

// API to Fetch a Single Sermon (By Slug)
app.get("/sermon/:slug", async (req, res) => {
  try {
      const sermon = await Sermon.findOne({ slug: req.params.slug });
      if (!sermon) {
          return res.status(404).json({ error: "Sermon not found" });
      }
      res.json(sermon);
  } catch (err) {
      res.status(500).json({ error: "Server error" });
  }
});
  
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/sermons", require("./routes/sermons"));
app.use("/api/prayers", require("./routes/prayers"));
app.use("/api/events", require("./routes/events"));
