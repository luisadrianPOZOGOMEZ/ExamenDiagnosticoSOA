const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/products', catalogController.getAllProducts);
router.get('/products/:id', catalogController.getProductById);
router.post('/products', catalogController.createProduct);
router.put('/products/:id', catalogController.updateProduct);
router.delete('/products/:id', catalogController.deleteProduct);

module.exports = router;