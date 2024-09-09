const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/login', authController.login);
app.get('/products', productController.getProducts);
app.post('/bill', productController.processBill);

// Server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
