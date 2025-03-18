const express = require("express");
const { getAllMenus, getMenuById, addMenu, updateMenu, deleteMenu } = require("../controllers/menuController");

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

module.exports = router;
