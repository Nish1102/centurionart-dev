const mongoose = require("mongoose");
const Menu = require("../models/menuModel");
const menus = require("./menuDemo");

const saveMenu = async (menu, parentId = null) => {
    const newMenu = new Menu({
        title: menu.name,
        parent_id: parentId,
    });

    const savedMenu = await newMenu.save();

    if (menu.child && menu.child.length > 0) {
        for (const child of menu.child) {
            await saveMenu(child, savedMenu._id);
        }
    }
};

const seedMenus = async () => {
    try {
        await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB");

        await Menu.deleteMany({});
        console.log("Existing menus cleared");

        for (const menu of menus) {
            await saveMenu(menu);
        }

        console.log("Menus saved successfully");
        await mongoose.connection.close(); 
        process.exit(0); 
    } catch (error) {
        console.error("Error saving menus:", error);
        await mongoose.connection.close();
        process.exit(1); 
    }
};

seedMenus();