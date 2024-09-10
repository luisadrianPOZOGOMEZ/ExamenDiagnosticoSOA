const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const orderId = await orderService.createOrder(req.body);
    res.status(201).json({ id: orderId, message: 'Pedido creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderService.getOrdersByUserId(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

