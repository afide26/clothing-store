import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item" key={item.id}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span onClick={() => removeItem(item)}>&#x276E;</span>
        {quantity}
        <span onClick={() => addItem(item)}>&#x276F;</span>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default connect(
  null,
  { addItem, removeItem }
)(CheckoutItem);
