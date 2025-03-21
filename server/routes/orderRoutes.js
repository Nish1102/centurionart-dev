const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

/**
 * @swagger
 * /api/order/payment:
 *   post:
 *     summary: Process Payment
 *     description: Handles the payment process for an order.
 *     tags:
 *       - Orders & Payments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - amount
 *               - paymentMethod
 *             properties:
 *               orderId:
 *                 type: string
 *                 example: "65fc8ab23d4f92d7c1e2a9b3"
 *               amount:
 *                 type: number
 *                 example: 4999
 *               paymentMethod:
 *                 type: string
 *                 enum: [credit_card, debit_card, paypal, stripe]
 *                 example: "stripe"
 *     responses:
 *       200:
 *         description: Payment processed successfully
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
 *                   example: "Payment processed successfully"
 *                 transactionId:
 *                   type: string
 *                   example: "txn_1234567890abcdef"
 *       400:
 *         description: Invalid payment request
 *       500:
 *         description: Internal server error
 */
router.post('/payment', OrderController.payment);

/**
 * @swagger
 * /api/order/create-checkout-session:
 *   post:
 *     summary: Create Checkout Session
 *     description: Initializes a checkout session for Stripe payments.
 *     tags:
 *       - Orders & Payments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - items
 *               - currency
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       example: "60d5ec49f1a2c23d4c8a4f92"
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *               currency:
 *                 type: string
 *                 example: "USD"
 *     responses:
 *       200:
 *         description: Checkout session created successfully
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
 *                   example: "Checkout session created successfully"
 *                 sessionId:
 *                   type: string
 *                   example: "cs_test_a1b2c3d4e5f6g7h8i9j0"
 *       400:
 *         description: Invalid request parameters
 *       500:
 *         description: Internal server error
 */
router.post('/create-checkout-session', OrderController.createCheckoutSession);

module.exports = router;
