const express = require('express');
const router = express.Router();
const artWorkController = require('../controllers/artWorkController');

// Register User
/**
 * @swagger
 * /api/artwork/artworks:
 *   get:
 *     summary: List of Artworks 
 *     description: Used to get List for Artworks.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Artworks list fetched successfully
 */
router.get('/artworks', artWorkController.getAllArtworks);

module.exports = router;
