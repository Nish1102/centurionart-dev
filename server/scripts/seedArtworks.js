const mongoose = require("mongoose");
const axios = require("axios");
const ArtWork = require("../models/artWorkModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel"); 
const Theme = require("../models/themeModel");
const Style = require("../models/styleModel");
const Medium = require("../models/mediumModel");

// MongoDB Connection
mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0")
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
    const client_id = 'jezH9f_PIRm76wa1VcT2QePTGJp9xyHXHrgjNvDEylM';
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(categoryName)}&client_id=${client_id}`
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch (error) {
    console.error(`Error fetching image for ${categoryName}:`, error);
    return "https://via.placeholder.com/400x300?text=No+Image";
  }
};

// Function to generate random size
const generateRandomSize = () => {
  const sizes = ["12x16 inches", "18x24 inches", "24x36 inches", "30x40 inches", "36x48 inches"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

// Function to create dummy artworks
const createDummyArtworks = async () => {
  const categories = await Category.find();
  const themes = await Theme.find();
  const styles = await Style.find();
  const mediums = await Medium.find();

  if (categories.length === 0 || themes.length === 0 || styles.length === 0 || mediums.length === 0) {
    console.error("❌ Required collections are empty! Seed them first.");
    process.exit(1);
  }

  const artists = await User.find({ userType: "artist" });
  if (artists.length === 0) {
    console.error("❌ No artist users found! Seed some artists first.");
    process.exit(1);
  }

  const dummyArtworks = await Promise.all(
    Array.from({ length: 49 }, async (_, i) => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      const randomStyle = styles[Math.floor(Math.random() * styles.length)];
      const randomMedium = mediums[Math.floor(Math.random() * mediums.length)];
      const randomArtist = artists[Math.floor(Math.random() * artists.length)];

      return {
        title: `Artwork ${i + 1}`,
        description: `This is a dummy description for artwork ${i + 1}`,
        category: randomCategory._id,
        theme: randomTheme._id,
        style: randomStyle._id,
        medium: randomMedium._id,
        size: generateRandomSize(),
        price: Math.floor(Math.random() * 5000) + 1000,
        artUrls: [await fetchImageUrl(randomCategory.name)],
        artist: randomArtist._id,
        available: Math.random() > 0.2,
        availableCount: Math.floor(Math.random() * 10) + 1,
        stories: Array.from({ length: Math.floor(Math.random() * 4) + 2 }, () => generateStory()),
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
