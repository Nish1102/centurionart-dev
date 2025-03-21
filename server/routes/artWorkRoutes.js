const express = require('express');
const router = express.Router();
const artWorkController = require('../controllers/artWorkController');

/**
 * @swagger
 * /api/artwork/artworks:
 *   get:
 *     summary: Get list of artworks
 *     description: Fetches a list of artworks with optional pagination and filtering.
 *     tags:
 *       - Artworks
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of artworks per page
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           example: "abstract"
 *         description: Filter artworks by category
 *     responses:
 *       200:
 *         description: List of artworks fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Artworks list fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "660a9e1f6e4b7c4e8cfc1234"
 *                       title:
 *                         type: string
 *                         example: "Sunset Over Water"
 *                       description:
 *                         type: string
 *                         example: "A beautiful oil painting of a sunset."
 *                       category:
 *                         type: string
 *                         example: "landscape"
 *                       price:
 *                         type: number
 *                         example: 2500
 *                       available:
 *                         type: boolean
 *                         example: true
 *       400:
 *         description: Invalid request parameters
 *       500:
 *         description: Internal server error
 */
router.get('/artworks', artWorkController.getAllArtworks);

module.exports = router;
