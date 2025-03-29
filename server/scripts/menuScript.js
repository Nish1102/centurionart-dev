const mongoose = require("mongoose");
const Menu = require("../models/menuModel");
const menus = require("../constant/menu");

const saveMenu = async (menu, parentId = null) => {
    try {

        // Ensure filter is always an array
        const filters = Array.isArray(menu.filter) ? menu.filter : [];

        const newMenu = new Menu({
            title: menu.name,
            parent_id: parentId,
            filters: filters, 
        });

        const savedMenu = await newMenu.save();

        if (menu.child && menu.child.length > 0) {
            for (const child of menu.child) {
                console.log(21 , 'child name --> ', child.name ,  'filters -->  ', child.filter)
                await saveMenu(child, savedMenu._id);
            }
        }
    } catch (error) {
        console.error("Error saving menu:", menu.name, error);
    }
};

const seedMenus = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("✅ Connected to MongoDB");

        await Menu.deleteMany({});
        console.log("🗑️ Existing menus cleared");

        for (const menu of menus) {
            await saveMenu(menu);
        }

        console.log("✅ Menus saved successfully");
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error saving menus:", error);
        await mongoose.connection.close();
        process.exit(1);
    }
};

seedMenus();