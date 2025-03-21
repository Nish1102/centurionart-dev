const Category = require("../models/categoryModel");
const logger = require("../utils/logger");

const getAllCategories = async (req, res) => {
  try {
    const page = parseInt(req.query._page) || 1;
    const limit = parseInt(req.query._limit) || 100;
    const skip = (page - 1) * limit;

    const totalCategories = await Category.countDocuments();
    const categories = await Category.find().skip(skip).limit(limit);    

    res.setHeader('x-total-count', totalCategories); 
    res.status(200).json(categories);
  } catch (error) {
    logger.error("Error fetching categories:", error);
    res.status(500).json({ message: "Error fetching categories" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    logger.error("Error fetching category:", error);
    res.status(500).json({ message: "Error fetching category" });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newCategory = new Category({ name, image });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    logger.error("Error adding category:", error);
    res.status(500).json({ message: "Error adding category" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error) {
    logger.error("Error updating category:", error);
    res.status(500).json({ message: "Error updating category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    logger.error("Error deleting category:", error);
    res.status(500).json({ message: "Error deleting category" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory
};
