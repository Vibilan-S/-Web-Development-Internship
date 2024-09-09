import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Grocery Delivery</h1>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}

export default Home;
