const mongoose = require("mongoose");
const axios = require("axios");
const Category = require("../models/categoryModel"); 

mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

const categoriesList = [
  "Abstract Art", "Realism", "Impressionism", "Expressionism", "Surrealism",
  "Minimalism", "Cubism", "Pop Art", "Street Art / Graffiti", "Calligraphy & Typography Art",
  "Portrait Art", "Landscape Art", "Still Life", "Photography", "Sculpture", "Fantasy & Mythology",
  "Renaissance Art", "Baroque Art", "Gothic Art", "Modern Art", "Contemporary Art",
  "Best-Selling Artists", "Famous Artists", "Seasonal Promotion", "Emerging Artists",
  "Digital Art", "AI-Generated Art", "NFT Art", "Cultural & Heritage Art", "Mixed Media",
  "New In", "Print", "Drawing", 
];

const fetchCategoryImage = async (category) => {
  try {
    const client_id = 'iZN7Ir1rg9PpJTCdi9XTm9Yh0DnPxXNTzJVYmnGblzs'
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(category)}&client_id=${client_id}`
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch {
    return "https://via.placeholder.com/400x300?text=No+Image";
  }
};

const createCategories = async () => {
  return await Promise.all(
    categoriesList.map(async (name) => ({
      name,
      image: await fetchCategoryImage(name),
    }))
  );
};

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    console.log("🗑️ Previous categories deleted!");

    const categories = await createCategories();
    await Category.insertMany(categories);

    console.log("✅ All categories inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting categories:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedCategories();
