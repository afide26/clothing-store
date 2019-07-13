import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

// Import the selector to memoize the state if there are no changes in value
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
