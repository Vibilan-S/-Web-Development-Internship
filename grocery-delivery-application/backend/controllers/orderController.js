const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create a new order
router.post('/', (req, res) => {
  const order = req.body;
  Order.createOrder(order, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating order' });
    }
    res.status(201).json({ orderId: result.insertId });
  });
});

// Get orders by user ID
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  Order.getOrdersByUser(userId, (err, orders) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching orders' });
    }
    res.json(orders);
  });
});

module.exports = router;
