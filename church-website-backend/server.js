require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  app.get("/", (req, res) => {
    res.send("Welcome to the Church Website API!");
  });

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/sermons", require("./routes/sermons"));
app.use("/api/prayers", require("./routes/prayers"));
app.use("/api/events", require("./routes/events"));
