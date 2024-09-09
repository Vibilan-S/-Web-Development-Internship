# Supermarket Billing System

## Project Overview

This Supermarket Billing System is designed to enhance customer experience, improve operational efficiency, and reduce manual errors in the billing process. The system integrates essential functionalities such as user authentication, product management, and billing generation to streamline supermarket operations. 

The project is built using a **Node.js** backend with **Express** for API handling, **React** for the frontend, and **MySQL** as the database.

## Features

- **User Authentication**: Only authorized users (cashier/admin) can access the billing system.
- **Product Management**: Products can be listed with prices and inventory quantities.
- **Billing System**: Cashiers can generate bills for customers by selecting products and quantities. The system calculates the total and deducts inventory quantities accordingly.
- **Security**: JWT-based token authentication ensures secure access.

## Directory Structure

```plaintext
supermarket-billing-system/
│
├── backend/
│   ├── app.js                  # Main server file
│   ├── config/
│   │   └── db.js               # Database connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── productController.js # Product and billing logic
│   └── models/
│       └── productModel.js      # Product model (optional)
│
├── frontend/
│   ├── public/
│   │   └── index.html           # Main HTML template
│   └── src/
│       ├── App.js               # Main React app component
│       ├── components/
│       │   ├── Billing.js       # Billing page
│       │   └── Login.js         # Login page
│       └── index.js             # React entry point
│
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## Technologies Used

- **Backend**: Node.js, Express, MySQL
- **Frontend**: React.js
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MySQL

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- MySQL installed and running.
- A MySQL database named `supermarket` with a table `products`.

### Database Setup

1. Create the MySQL database:
   ```sql
   CREATE DATABASE supermarket;
   ```
2. Create the `products` table:
   ```sql
   CREATE TABLE products (
       product_id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       price DECIMAL(10, 2),
       quantity INT
   );
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node app.js
   ```
   The server will run at `http://localhost:3001`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

### Running the Project

- Open the browser and go to `http://localhost:3000`.
- Log in with the following credentials:
  - Username: `admin`
  - Password: `admin123`
- You can start adding products to the bill and the system will automatically calculate the total.

## Future Improvements

- **Admin Dashboard**: To manage products (add, update, delete).
- **Advanced Billing**: Implementing discounts, tax calculations, etc.
- **Sales Reports**: Adding reports for admins to track daily sales and revenue.

## Authors

- VIBILAN S - Final Year B.Tech. Student, Information Technology
