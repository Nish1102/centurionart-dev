const mongoose = require("mongoose");
const Menu = require("../models/menuModel");
const menus = require("../constant/menu");
const Category = require("../models/categoryModel");
const Medium = require("../models/mediumModel"); 
const Style = require("../models/styleModel"); 
const Theme = require("../models/themeModel");
const User = require("../models/userModel");


let category = null;
let medium = null;
let style = null;
let theme = null;
let artist = null;
let isMenuNameChange = false; 


const saveMenu = async (menu, parentId = null) => {
    try {
        const filters = Array.isArray(menu.filter) ? menu.filter : [];
        if (filters.length > 0) {
            filters.forEach((filter) => {
                if (filter.id === "category") {
                    filter.value = category
                        .filter((cat) => cat.id === filter.value.toUpperCase())
                        .map((cat) => cat._id)[0]; 
                } else if (filter.id === "medium") {
                    filter.value = medium
                        .filter((cat) => cat.id === filter.value.toUpperCase())
                        .map((cat) => cat._id)[0]; 
                } else if (filter.id === "style") {
                    filter.value = style
                        .filter((cat) => cat.id === filter.value.toUpperCase())
                        .map((cat) => cat._id)[0]; 
                } else if (filter.id === "theme") {
                    filter.value = theme
                        .filter((cat) => cat.id === filter.value.toUpperCase())
                        .map((cat) => cat._id)[0]; 
                } else if (filter.id === "artist") {
                    const randomArtist = artist[Math.floor(Math.random() * artist.length)];
                    filter.value = randomArtist._id;
                    if(isMenuNameChange) {
                        menu.name = randomArtist.name.first + " " + randomArtist.name.last;
                    }
                } 
            });
        }

        const newMenu = new Menu({
            title: menu.name,
            parent_id: parentId,
            filters: filters, 
        });

        const savedMenu = await newMenu.save();

        if (menu.child && menu.child.length > 0) {
            if(menu.name === "FAMOUS ARTIST" || menu.name === "FEATURED ARTIST") {
                isMenuNameChange = true;
            } else {
                isMenuNameChange = false;
            }

            for (const child of menu.child) {
                await saveMenu(child, savedMenu._id);
            }
        }
    } catch (error) {
        console.error("Error saving menu:", menu.name, error);
    }
};

const seedMenus = async () => {
    try {
        console.log("🔗 Connecting to MongoDB...");
        await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0");
        console.log("✅ Connected to MongoDB");

        console.log("🔗 fetching existing categories, mediums, styles, and themes...");
        category = await Category.find({});
        medium = await Medium.find({});
        style = await Style.find({});
        theme = await Theme.find({});
        artist = await User.find({ userType: "artist" }, { _id: 1, name: 1 })


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