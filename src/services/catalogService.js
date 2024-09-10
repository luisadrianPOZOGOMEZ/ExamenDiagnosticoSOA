const Product = require('../models/product');

class CatalogService {
  async getAllProducts() {
    return await Product.getAll();
  }

  async getProductById(id) {
    return await Product.getById(id);
  }

  async createProduct(productData) {
    return await Product.create(productData);
  }

  async updateProduct(id, productData) {
    return await Product.update(id, productData);
  }

  async deleteProduct(id) {
    return await Product.delete(id);
  }
}

module.exports = new CatalogService();