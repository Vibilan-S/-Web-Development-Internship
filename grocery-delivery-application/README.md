# Grocery Delivery Application

## Project Overview

The Grocery Delivery Application allows users to browse, select, and purchase groceries online. It features an intuitive interface for both customers and delivery personnel. The application includes functionalities such as real-time order tracking and secure payment processing.

The project is built using a **Node.js** backend with **Express** for API handling, **React** for the frontend, and **MySQL** as the database.

## Features

- **User Authentication**: Allows users to log in and access personalized features.
- **Product Browsing**: View and search for groceries with details.
- **Cart Management**: Add and remove items from the cart.
- **Checkout**: Securely process payments and place orders.
- **Order Tracking**: Track the status of your orders in real-time.

## Directory Structure

```plaintext
grocery-delivery-application/
│
├── backend/
│   ├── app.js                  # Main server file
│   ├── config/
│   │   └── db.js               # Database connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── orderController.js   # Order management logic
│   │   └── productController.js # Product management logic
│   └── models/
│       ├── orderModel.js        # Order model
│       └── productModel.js      # Product model
│   └── package.json             # Backend dependencies and scripts
│
├── frontend/
│   ├── public/
│   │   └── index.html           # Main HTML template
│   └── src/
│       ├── App.js               # Main React app component
│       ├── components/
│       │   ├── Home.js          # Home page
│       │   ├── ProductList.js   # Product listing page
│       │   ├── ProductDetail.js # Product detail page
│       │   ├── Cart.js          # Cart page
│       │   └── Checkout.js      # Checkout page
│       └── index.js             # React entry point
│   └── package.json             # Frontend dependencies and scripts
│
└── README.md                    # Project documentation
