import React from "react";
import { connect } from "react-redux";
// import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item" key={cartItem.id}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span>&#x276E;</span>
        {quantity}
        <span>&#x276F;</span>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
