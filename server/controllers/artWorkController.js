const ArtWork = require('../models/artWorkModel');
const Category = require("../models/categoryModel");
const path = require('path');
const logger = require('../utils/logger');

const getAllArtworks = async (req, res) => {
    const page = parseInt(req.query._page) || 1;
    const limit = parseInt(req.query._limit) || 100;
    const skip = (page - 1) * limit;

    try {
        const totalArtworks = await ArtWork.countDocuments(); 
        const artworks = await ArtWork.find().skip(skip).limit(limit);

        // Convert MongoDB data to match frontend structure
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

module.exports = {
    getAllArtworks
};
