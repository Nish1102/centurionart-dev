const ArtWork = require('../models/artWorkModel')
const axios = require('axios');

// Artworks endpoint with pagination
const getAllArtworks = async (req, res) => {
    const page = parseInt(req.query._page) || 1;
    const limit = parseInt(req.query._limit) || 100;
    const skip = (page - 1) * limit;
  
    try {
      const response = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
      const artworks = response.data.products.map(product => ({
        id: product.id,
        title: product.title,
        author: product.brand,
        price: product.price,
        location: product.category,
        image: product.thumbnail,
        description: product.description
      }));
  
      res.setHeader('x-total-count', response.data.total);
      res.json(artworks);
    } catch (error) {
      console.error('Error In Login User:', error);
      res.status(500).json({ message: 'Internal server error' });  
    }
};

module.exports = {
    getAllArtworks
}