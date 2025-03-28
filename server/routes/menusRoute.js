const express = require("express");
const { getAllMenus, getMenuById, addMenu, updateMenu, deleteMenu, getArtworkByMenu } = require("../controllers/menuController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Menu management API
 */

/**
 * @swagger
 * /api/menus:
 *   get:
 *     summary: Get all menus
 *     tags: [Menus]
 *     responses:
 *       200:
 *         description: A list of menus.
 */
router.get("/", getAllMenus);

/**
 * @swagger
 * /api/menus/{id}:
 *   get:
 *     summary: Get a menu by ID
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu details.
 */
router.get("/:id", getMenuById);

/**
 * @swagger
 * /api/menus:
 *   post:
 *     summary: Add a new menu
 *     tags: [Menus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Menu created successfully.
 */
router.post("/", addMenu);

/**
 * @swagger
 * /api/menus/{id}:
 *   put:
 *     summary: Update a menu by ID
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Menu updated successfully.
 */
router.put("/:id", updateMenu);

/**
 * @swagger
 * /api/menus/{id}:
 *   delete:
 *     summary: Delete a menu by ID
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu deleted successfully.
 */
router.delete("/:id", deleteMenu);

/**
 * @swagger
 * /api/artworks/{id}:
 *   get:
 *     summary: Get artwork details by ID
 *     tags: [Artworks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the artwork to retrieve.
 *     responses:
 *       200:
 *         description: Artwork details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 title:
 *                   type: string
 *                   example: "Starry Night"
 *                 artist:
 *                   type: string
 *                   example: "Vincent van Gogh"
 *                 year:
 *                   type: integer
 *                   example: 1889
 *                 description:
 *                   type: string
 *                   example: "A famous painting by Vincent van Gogh."
 *       400:
 *         description: Invalid ID supplied.
 *       404:
 *         description: Artwork not found.
 */
router.get("/artworks/:id", getArtworkByMenu);


module.exports = router;
