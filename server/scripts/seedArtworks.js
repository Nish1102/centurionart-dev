const mongoose = require("mongoose");
const axios = require("axios");
const ArtWork = require("../models/artWorkModel");

// MongoDB Connection
mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

// Function to generate random story
const generateStory = () => {
  const words = [
    "Once", "upon", "a", "time", "in", "a", "small", "village", "an", "artist", "created", "a", "beautiful", "masterpiece",
    "It", "was", "inspired", "by", "nature", "and", "human", "emotions", "People", "from", "everywhere", "admired", "its", "beauty",
    "The", "colors", "spoke", "volumes", "about", "passion", "and", "creativity", "It", "became", "a", "legendary", "piece"
  ];
  return Array.from({ length: 20 }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
};

// Function to fetch random image from Unsplash
const fetchImageUrl = async () => {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/photos/random?query=art,painting&client_id=0lxMQL91nJrnjb47038UD4nd_jSonnU-Ruv9JY0mcN0"
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return "https://via.placeholder.com/400x300?text=No+Image"; // Fallback image
  }
};

// Function to create dummy artworks
const createDummyArtworks = async () => {
  const dummyArtworks = await Promise.all(
    Array.from({ length: 49 }, async (_, i) => {
      return {
        title: `Artwork ${i + 1}`,
        description: `This is a dummy description for artwork ${i + 1}`,
        category: new mongoose.Types.ObjectId(), // Replace with actual category _id
        medium: "Oil on Canvas",
        size: "24x36 inches",
        price: Math.floor(Math.random() * 5000) + 1000, // Random price between 1000-6000
        artUrls: [await fetchImageUrl()], // Fetch image from Unsplash
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
    const artworks = await createDummyArtworks();
    await ArtWork.insertMany(artworks);
    console.log("✅ 49 Dummy artworks inserted successfully!");
    mongoose.connection.close(); 
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
