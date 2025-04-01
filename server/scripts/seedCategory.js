const mongoose = require("mongoose");
const axios = require("axios");
const Category = require("../models/categoryModel");
const { categoriesList } = require("../constant/artwork"); 

mongoose
  .connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

const fetchCategoryImage = async (categoryName) => {
  try {
    const client_id = "iZN7Ir1rg9PpJTCdi9XTm9Yh0DnPxXNTzJVYmnGblzs";
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(categoryName)}&client_id=${client_id}`
    );
    return response.data.urls?.small || "https://via.placeholder.com/400x300?text=No+Image";
  } catch {
    return "https://via.placeholder.com/400x300?text=No+Image";
  }
};

const createCategories = async () => {
  return await Promise.all(
    categoriesList.map(async (category) => ({
      id: category.id, // Uses predefined uppercase ID
      name: category.name, // Uses actual category name
      image: await fetchCategoryImage(category.name), // Fetches image based on name
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
