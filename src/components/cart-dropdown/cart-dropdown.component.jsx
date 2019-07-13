import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item-container">
            <img
              className="cart-item-container-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p className="cart-item-container-name">{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
