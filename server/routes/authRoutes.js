const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register User
/**
 * @swagger
 * /api/auth/register:
 *   get:
 *     summary: Register User
 *     description: Register User.
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
 *                   example: User registered successfully
 */
router.post('/register', authController.registerUser);

// Login User
/**
 * @swagger
 * /api/auth/login:
 *   get:
 *     summary: Login User
 *     description: Login User.
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
 *                   example: User logged In successfully
 */
router.post('/login', authController.loginUser);

module.exports = router;
