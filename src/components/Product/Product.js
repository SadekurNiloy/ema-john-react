import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: {price}</p>
        <p>Seller: {seller}</p>
        <p>
          <small>{ratings} </small>star
        </p>
      </div>
      <button
        onClick={() => props.addToProduct(props.product)}
        className="btn-card"
      >
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
