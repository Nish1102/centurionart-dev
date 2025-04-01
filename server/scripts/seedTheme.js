const mongoose = require("mongoose");
const Theme = require("../models/themeModel");
const { themesList } = require("../constant/artwork"); 

// MongoDB connection URL
const MONGO_URI = "mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0"; 

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB...");

    // Fetch existing theme IDs from the database
    const existingThemes = await Theme.find({}, { id: 1 });
    const existingThemeIds = new Set(existingThemes.map(theme => theme.id));

    // Filter out themes that already exist
    const newThemes = themesList.filter(theme => !existingThemeIds.has(theme.id));

    if (newThemes.length > 0) {
      await Theme.insertMany(newThemes);
      console.log(`✅ Inserted ${newThemes.length} new themes.`);
    } else {
      console.log("ℹ️ No new themes to insert.");
    }

    console.log("🎉 All themes processed.");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });
