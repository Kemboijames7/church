require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


  app.get("/", (req, res) => {
    res.send("Welcome to Aic Fellowship Annex Church Website API!");
  });

  
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/sermons", require("./routes/sermons"));
app.use("/api/prayers", require("./routes/prayers"));
app.use("/api/events", require("./routes/events"));
