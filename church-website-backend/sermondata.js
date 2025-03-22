const mongoose = require("mongoose");
const Sermon = require("./models/Sermon"); // Make sure this path is correct
require("dotenv").config();

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI,
    {dbName: "church-web", 
        
    })
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


const sermons = [
    {
        theme: "Finding Christ is Finding Life",
        pastor: "Pst. John Doe",
        date: new Date("2025-03-15"),
        scripture: "John 14:6",
        videoUrl: "https://www.youtube.com/embed/Ojsqt2dgBoo",
        notes: "In this sermon, we explore what it means to find life in Christ.",
        slug: "finding-christ-is-finding-life"
    },
    {
        theme: "The Uncommon Spirit-led Impartation",
        pastor: "Pst. Sarah Johnson",
        date: new Date("2025-04-10"),
        scripture: "Acts 2:38",
        videoUrl: "https://www.youtube.com/embed/different_video",
        notes: "A powerful message on the Holy Spirit's guidance.",
        slug: "the-uncommon-spirit-led-impartation"
    }
];

// Insert data into the database
const sermonDb = async () => {
    try {
        await Sermon.deleteMany(); // Clear existing data (optional)
        await Sermon.insertMany(sermons);
        console.log("✅ Sermon Data Inserted Successfully!");
        mongoose.connection.close(); // Close connection after seeding
    } catch (err) {
        console.error("❌ Error seeding data:", err);
    }
};


