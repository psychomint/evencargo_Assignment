const express = require('express');
const { getAllProducts, addProduct, removeProduct } = require('../controllers/productsController');
const router = express.Router();

router.get('/products',getAllProducts);
router.post('/products',addProduct);
router.delete('/products/:id',removeProduct);

module.exports = router;