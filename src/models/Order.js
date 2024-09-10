const db = require('../config/database');

class Order {
  static async create(order) {
    const [result] = await db.query('INSERT INTO orders SET ?', order);
    return result.insertId;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0];
  }

  static async getAllByUserId(userId) {
    const [rows] = await db.query('SELECT * FROM orders WHERE user_id = ?', [userId]);
    return rows;
  }
}

module.exports = Order;