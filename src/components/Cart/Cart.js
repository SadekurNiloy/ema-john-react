import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const {cart} =props;
  return (
    <div className="cart">
      <h1>Products Cart Here</h1>
      <p>Selected Item: {cart.length}</p>
    </div>
  );
};

export default Cart;
