const db = require('../config/db'); // Importing the database connection

// Product Model for interacting with the products table in the database
const Product = {
  // Fetch all products from the database
  getAllProducts: (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Fetch a product by its ID
  getProductById: (id, callback) => {
    const sql = 'SELECT * FROM products WHERE product_id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result[0]);
    });
  },

  // Add a new product to the database
  addProduct: (product, callback) => {
    const { name, price, quantity } = product;
    const sql = 'INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)';
    db.query(sql, [name, price, quantity], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  // Update an existing product in the database
  updateProduct: (id, product, callback) => {
    const { name, price, quantity } = product;
    const sql = 'UPDATE products SET name = ?, price = ?, quantity = ? WHERE product_id = ?';
    db.query(sql, [name, price, quantity, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  // Delete a product by its ID
  deleteProduct: (id, callback) => {
    const sql = 'DELETE FROM products WHERE product_id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  }
};

module.exports = Product;
