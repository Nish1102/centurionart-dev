const mongoose = require("mongoose");
const axios = require("axios");
const ArtWork = require("../models/artWorkModel");
const Category = require("../models/categoryModel");

// MongoDB Connection
mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Function to generate random story
const generateStory = () => {
  const words = [
    "Once", "upon", "a", "time", "in", "a", "small", "village", "an", "artist", "created", "a", "beautiful", "masterpiece",
    "It", "was", "inspired", "by", "nature", "and", "human", "emotions", "People", "from", "everywhere", "admired", "its", "beauty",
    "The", "colors", "spoke", "volumes", "about", "passion", "and", "creativity", "It", "became", "a", "legendary", "piece"
  ];
  return Array.from({ length: 20 }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
};

// Function to fetch random image from Unsplash based on category
const fetchImageUrl = async (categoryName) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(categoryName)}&client_id=0lxMQL91nJrnjb47038UD4nd_jSonnU-Ruv9JY0mcN0`
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch (error) {
    console.error(`Error fetching image for ${categoryName}:`, error);
    return "https://via.placeholder.com/400x300?text=No+Image";
  }
};

// Function to create dummy artworks with correct category
const createDummyArtworks = async () => {
  const categories = await Category.find(); // Fetch all categories from DB
  if (categories.length === 0) {
    console.error("❌ No categories found! Seed categories first.");
    process.exit(1);
  }

  const dummyArtworks = await Promise.all(
    Array.from({ length: 49 }, async (_, i) => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]; // Pick random category

      return {
        title: `Artwork ${i + 1}`,
        description: `This is a dummy description for artwork ${i + 1}`,
        category: randomCategory._id, // Assign correct category ID
        medium: "Oil on Canvas",
        size: "24x36 inches",
        price: Math.floor(Math.random() * 5000) + 1000, // Random price between 1000-6000
        artUrls: [await fetchImageUrl(randomCategory.name)], // Fetch image based on category name
        artist: new mongoose.Types.ObjectId(), // Replace with actual artist _id
        available: Math.random() > 0.2, // 80% chance of being available
        availableCount: Math.floor(Math.random() * 10) + 1, // Random stock between 1-10
        stories: Array.from({ length: Math.floor(Math.random() * 4) + 2 }, () => generateStory()), // 2-5 random stories
      };
    })
  );
  return dummyArtworks;
};

const seedDatabase = async () => {
  try {
    await ArtWork.deleteMany(); 
    console.log("🗑️ Previous artworks deleted!");

    const artworks = await createDummyArtworks();
    await ArtWork.insertMany(artworks);

    console.log("✅ 49 Dummy artworks inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
