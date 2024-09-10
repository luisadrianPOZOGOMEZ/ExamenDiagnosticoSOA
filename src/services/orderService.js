const Order = require('../models/Order');

class OrderService {
  async createOrder(orderData) {
    return await Order.create(orderData);
  }

  async getOrderById(id) {
    return await Order.getById(id);
  }

  async getOrdersByUserId(userId) {
    return await Order.getAllByUserId(userId);
  }
}

module.exports = new OrderService();