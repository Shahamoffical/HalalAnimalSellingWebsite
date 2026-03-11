const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// @desc    Fetch all products
// @route   GET /api/products
router.route('/').get(getProducts);

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
router.route('/:id').get(getProductById);

module.exports = router;