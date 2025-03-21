const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

/**
 * @swagger
 * /api/artwork/categories:
 *   get:
 *     summary: Get all categories
 *     description: Fetches a list of all artwork categories.
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
 *                   example: Categories list fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "60d5ec49f1a2c23d4c8a4f92"
 *                       name:
 *                         type: string
 *                         example: "Abstract Art"
 */
router.get('/', categoryController.getAllCategories);

module.exports = router;
