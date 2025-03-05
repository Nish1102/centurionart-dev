const express = require('express');
const router = express.Router();
const artWorkController = require('../controllers/artWorkController');

// Register User
router.get('/artworks', artWorkController.getAllArtworks);



module.exports = router;
