const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Get all products
router.get('/', (req, res) => {
  Product.getAllProducts((err, products) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching products' });
    }
    res.json(products);
  });
});

// Get product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  Product.getProductById(productId, (err, product) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching product' });
    }
    res.json(product);
  });
});

module.exports = router;
