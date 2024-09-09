const db = require('../config/db');

exports.getProducts = (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.processBill = (req, res) => {
    const { products } = req.body;
    let totalAmount = 0;

    products.forEach(product => {
        const sql = "SELECT price FROM products WHERE product_id = ?";
        db.query(sql, [product.product_id], (err, result) => {
            if (err) throw err;
            totalAmount += result[0].price * product.quantity;

            const updateSql = "UPDATE products SET quantity = quantity - ? WHERE product_id = ?";
            db.query(updateSql, [product.quantity, product.product_id]);
        });
    });

    const billSql = "INSERT INTO bills (total_amount) VALUES (?)";
    db.query(billSql, [totalAmount], (err, result) => {
        if (err) throw err;
        res.send({ bill_id: result.insertId, totalAmount });
    });
};
