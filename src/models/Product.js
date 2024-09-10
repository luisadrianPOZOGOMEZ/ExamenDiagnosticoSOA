const db = require('../config/database');

class Product {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM products WHERE stock > 0');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(product) {
    const [result] = await db.query('INSERT INTO products SET ?', product);
    return result.insertId;
  }

  static async update(id, product) {
    const [result] = await db.query('UPDATE products SET ? WHERE id = ?', [product, id]);
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Product;