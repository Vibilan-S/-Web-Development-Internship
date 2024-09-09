const db = require('../config/db');

const Product = {
  getAllProducts: (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  getProductById: (id, callback) => {
    const sql = 'SELECT * FROM products WHERE product_id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result[0]);
    });
  }
};

module.exports = Product;
