import React from "react";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/ cart/cart.actions";
import { selectCartItemsCount } from "../../redux/ cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartVisibility, itemCount }) => {
  console.log("CartItems", itemCount);
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
