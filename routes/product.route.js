const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, addProduct, updateProduct, deleteProductById } = require('../controller/product.controller.js');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProductById);

module.exports = router;
