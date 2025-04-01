const ArtWork = require('../models/artWorkModel');
const Category = require("../models/categoryModel");
const path = require('path');
const logger = require('../utils/logger');
const Menu = require("../models/menuModel");
const Style = require("../models/styleModel");
const Medium = require("../models/mediumModel");    
const Theme = require("../models/themeModel");

// Get all artworks
const getAllArtworks = async (req, res) => {
    const page = parseInt(req.query._page) || 1;
    const limit = parseInt(req.query._limit) || 100;
    const skip = (page - 1) * limit;

    try {
        const totalArtworks = await ArtWork.countDocuments();
        const artworks = await ArtWork.find().skip(skip).limit(limit);

        const formattedArtworks = artworks.map(art => ({
            id: art._id,
            title: art.title,
            author: art.artist,
            price: art.price,
            location: art.category,
            image: art.artUrls[0],
            description: art.description
        }));

        res.setHeader('x-total-count', totalArtworks);
        res.json(formattedArtworks);
    } catch (error) {
        console.error('Error fetching artworks:', error.message);
        logger.error(path.join(__dirname), 'getAllArtworks', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get artworks by menu ID
const getArtworksByMenu = async (req, res) => {
    try {        
        const { menuId } = req.params;

        const menu = await Menu.findById(menuId);

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        // Construct query filters
        let query = {};

        menu.filters.forEach(filter => {
            if (filter.id === 'price' && filter.order) {
                // If price filter has min and max values, build a range query
                if (filter.order.min !== undefined && filter.order.max !== undefined) {
                    query.price = {
                        $gte: filter.order.min,
                        $lte: filter.order.max
                    };
                }
            } else if (filter.value) {
                // For other filters (e.g., category)
                query[filter.id] = filter.value;
            }
        });

        console.log(50, "Query Filters:", query);

        // Fetch artworks based on filters
        const artworks = await ArtWork.find(query).populate("artist category theme style medium");

        console.log(55, "Fetched Artworks:", artworks);

        res.status(200).json(artworks);
    } catch (error) {
        console.error("Error fetching artworks:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a new artwork
const addArtworks = async (req, res) => {
    try {
        const { title, description, category, medium, size, price, artUrls, artist, available, availableCount, isFramed, readyToHang, stories, saleStatus } = req.body;
        
        const newArtWork = new ArtWork({
            title,
            description,
            category,
            medium,
            size,
            price,
            artUrls,
            artist,
            available: available ?? true,
            availableCount: availableCount ?? 0,
            isFramed: isFramed ?? true,
            readyToHang: readyToHang ?? true,
            stories: stories || [],
            saleStatus: saleStatus || "available"
        });

        await newArtWork.save();
        res.status(201).json(newArtWork);
    } catch (error) {
        console.error('Error adding artwork:', error.message);
        logger.error(path.join(__dirname), 'addArtworks', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an artwork
const updateArtworks = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedArtWork = await ArtWork.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedArtWork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.json(updatedArtWork);
    } catch (error) {
        console.error('Error updating artwork:', error.message);
        logger.error(path.join(__dirname), 'updateArtworks', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete an artwork
const deleteArtworks = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedArtWork = await ArtWork.findByIdAndDelete(id);
        if (!deletedArtWork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.json({ message: 'Artwork deleted successfully' });
    } catch (error) {
        console.error('Error deleting artwork:', error.message);
        logger.error(path.join(__dirname), 'deleteArtworks', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// upload Artworks Images
const uploadArtworkImages = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No images uploaded" });
        }

        // Get uploaded file URLs
        const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

        // Update artwork document
        const artwork = await ArtWork.findByIdAndUpdate(
            id,
            { $push: { artUrls: { $each: imageUrls } } },
            { new: true }
        );

        if (!artwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }

        res.status(200).json({ message: "Images uploaded successfully", artwork });
    } catch (error) {
        console.error("Error uploading images:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getAllArtworks,
    addArtworks,
    updateArtworks,
    deleteArtworks,
    uploadArtworkImages,
    getArtworksByMenu
};
