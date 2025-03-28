const express = require('express');
const router = express.Router();
const artWorkController = require('../controllers/artWorkController');
const { uploadMultiple } = require('../services/uploads');

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

/**
 * @swagger
 * /api/artwork:
 *   post:
 *     summary: Add a new artwork
 *     description: Adds a new artwork to the database.
 *     tags:
 *       - Artworks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               medium:
 *                 type: string
 *               size:
 *                 type: string
 *               price:
 *                 type: number
 *               artUrls:
 *                 type: array
 *                 items:
 *                   type: string
 *               artist:
 *                 type: string
 *               available:
 *                 type: boolean
 *               availableCount:
 *                 type: number
 *               isFramed:
 *                 type: boolean
 *               readyToHang:
 *                 type: boolean
 *               stories:
 *                 type: array
 *                 items:
 *                   type: string
 *               saleStatus:
 *                 type: string
 *                 enum: ["available", "not-available", "sold"]
 *     responses:
 *       201:
 *         description: Artwork added successfully
 *       500:
 *         description: Internal server error
 */
router.post('/artwork', artWorkController.addArtworks);

/**
 * @swagger
 * /api/artwork/{id}:
 *   put:
 *     summary: Update an artwork
 *     description: Updates an existing artwork by ID.
 *     tags:
 *       - Artworks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               available:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Artwork updated successfully
 *       404:
 *         description: Artwork not found
 *       500:
 *         description: Internal server error
 */
router.put('/artwork/:id', artWorkController.updateArtworks);

/**
 * @swagger
 * /api/artwork/{id}:
 *   delete:
 *     summary: Delete an artwork
 *     description: Deletes an artwork by ID.
 *     tags:
 *       - Artworks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork ID
 *     responses:
 *       200:
 *         description: Artwork deleted successfully
 *       404:
 *         description: Artwork not found
 *       500:
 *         description: Internal server error
 */
router.delete('/artwork/:id', artWorkController.deleteArtworks);

/**
 * @swagger
 * /api/artwork/upload/{id}:
 *   post:
 *     summary: Upload artwork images
 *     description: Uploads multiple images for an artwork and saves the URLs in artUrls.
 *     tags:
 *       - Artworks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Images uploaded successfully and URLs saved
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
router.post('/artwork/upload/:id', uploadMultiple, artWorkController.uploadArtworkImages);


module.exports = router;
