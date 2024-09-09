import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>No items in the cart yet.</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
