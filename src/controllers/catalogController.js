const catalogService = require('../services/catalogService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await catalogService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await catalogService.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productId = await catalogService.createProduct(req.body);
    res.status(201).json({ id: productId, message: 'Producto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await catalogService.updateProduct(req.params.id, req.body);
    if (updated) {
      res.json({ message: 'Producto actualizado exitosamente' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await catalogService.deleteProduct(req.params.id);
    if (deleted) {
      res.json({ message: 'Producto eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};