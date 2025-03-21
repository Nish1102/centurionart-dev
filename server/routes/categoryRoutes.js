const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

/**
 * @swagger
 * /api/artwork/categories:
 *   get:
 *     summary: Get all artwork categories
 *     description: Fetches a list of all available artwork categories.
 *     tags:
 *       - Art Categories
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: "modern"
 *         description: Search categories by name
 *     responses:
 *       200:
 *         description: List of categories fetched successfully
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
 *                   example: "Categories list fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "60d5ec49f1a2c23d4c8a4f92"
 *                       name:
 *                         type: string
 *                         example: "Abstract Art"
 *                       description:
 *                         type: string
 *                         example: "A category dedicated to abstract paintings."
 *       400:
 *         description: Invalid request parameters
 *       500:
 *         description: Internal server error
 */
router.get('/categories', categoryController.getAllCategories);

module.exports = router;
