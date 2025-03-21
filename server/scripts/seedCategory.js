const mongoose = require("mongoose");
const axios = require("axios");
const Category = require("../models/categoryModel"); 

// MongoDB Connection
mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

// Categories List
const categoriesList = [
  // 🎨 Broad Art Categories:
  "Abstract Art", "Realism", "Impressionism", "Expressionism", "Surrealism",
  "Minimalism", "Cubism", "Pop Art", "Street Art / Graffiti", "Calligraphy & Typography Art",
  
  // 🖼 Subject-Based Art Categories:
  "Portrait Art", "Landscape Art", "Still Life", "Photography",
  "Sculpture", "Fantasy & Mythology",

  // 🏛 Time-Period-Based Art Styles:
  "Renaissance Art", "Baroque Art", "Gothic Art", "Modern Art", "Contemporary Art",

  // 🌟 Special & Trending Categories:
  "Best-Selling Artists", "Famous Artists", "Seasonal Promotion", "Emerging Artists",
  "Digital Art", "AI-Generated Art", "NFT Art", "Cultural & Heritage Art", "Mixed Media"
];

// Fetch Random Image from Unsplash (Based on Category Name)
const fetchCategoryImage = async (category) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(category)}&client_id=0lxMQL91nJrnjb47038UD4nd_jSonnU-Ruv9JY0mcN0`
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch (error) {
    console.error(`Error fetching image for ${category}:`, error);
    return "https://via.placeholder.com/400x300?text=No+Image"; // Fallback image
  }
};

// Function to Create Categories
const createCategories = async () => {
  const categoriesData = await Promise.all(
    categoriesList.map(async (name) => ({
      name,
      image: await fetchCategoryImage(name),
    }))
  );
  return categoriesData;
};

// Seeding Categories into Database
const seedCategories = async () => {
  try {
    await Category.deleteMany(); // Purani categories delete
    console.log("🗑️ Previous categories deleted!");

    const categories = await createCategories();
    await Category.insertMany(categories);

    console.log("✅ All categories inserted successfully!");
    mongoose.connection.close(); // Database close after completion
  } catch (error) {
    console.error("❌ Error inserting categories:", error);
  }
};

seedCategories();
