const Menu = require("../models/menuModel");
const Artwork = require("../models/artWorkModel");
const logger = require("../utils/logger");

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    logger.error("Error fetching menus:", error);
    res.status(500).json({ message: "Error fetching menus" });
  }
};

const getMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findById(id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(menu);
  } catch (error) {
    logger.error("Error fetching menu:", error);
    res.status(500).json({ message: "Error fetching menu" });
  }
};


const getArtworkByMenu = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Fetch menu data using the provided menu ID
    const menu = await Menu.findById(id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    // Note -> Arregate will Manage after Filter Analysis will complete

    // Step 2: Use the menu data as filters to get artworks
    const artworks = await Artwork.aggregate([
      {
        $match: {
          category: menu.category, // Example: Match category with the menu
          style: menu.style, // Example: Match style if exists in the menu
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          year: 1,
          description: 1,
          imageUrl: 1,
        },
      },
    ]);

    res.status(200).json(artworks);
  } catch (error) {
    logger.error("Error fetching artworks by menu:", error);
    res.status(500).json({ message: "Error fetching artworks" });
  }
};


const addMenu = async (req, res) => {
  try {
    const { title, icon, order_number, parent_id } = req.body;
    const newMenu = new Menu({ title, icon, order_number, parent_id });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    logger.error("Error adding menu:", error);
    res.status(500).json({ message: "Error adding menu" });
  }
};

const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMenu = await Menu.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMenu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(updatedMenu);
  } catch (error) {
    logger.error("Error updating menu:", error);
    res.status(500).json({ message: "Error updating menu" });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenu = await Menu.findByIdAndDelete(id);
    if (!deletedMenu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    logger.error("Error deleting menu:", error);
    res.status(500).json({ message: "Error deleting menu" });
  }
};

module.exports = {
  getAllMenus,
  getMenuById,
  addMenu,
  updateMenu,
  deleteMenu,
  getArtworkByMenu
};
