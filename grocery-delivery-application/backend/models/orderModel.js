const db = require('../config/db');

const Order = {
  createOrder: (order, callback) => {
    const sql = 'INSERT INTO orders (user_id, product_id, quantity, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [order.userId, order.productId, order.quantity, order.status], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  getOrdersByUser: (userId, callback) => {
    const sql = 'SELECT * FROM orders WHERE user_id = ?';
    db.query(sql, [userId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};

module.exports = Order;
