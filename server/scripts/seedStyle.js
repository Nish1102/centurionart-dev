const mongoose = require("mongoose");
const Style = require("../models/styleModel"); 
const { stylesList } = require("../constant/artwork"); 

// MongoDB connection URL
const MONGO_URI = "mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0"; 

const seedStyles = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB...");

    // Delete all existing styles
    await Style.deleteMany();
    console.log("🗑️ Deleted all existing styles!");

    // Insert new styles
    if (stylesList.length > 0) {
      await Style.insertMany(stylesList);
      console.log(`✅ Inserted ${stylesList.length} new styles.`);
    } else {
      console.log("ℹ️ No styles to insert.");
    }

    console.log("🎉 Styles seeding completed!");
  } catch (error) {
    console.error("❌ Error seeding styles:", error);
  } finally {
    mongoose.disconnect();
  }
};

// Run the seeding function
seedStyles();
