import { createSelector } from "reselect";

// Input selector: first type to return only 1 piece/slice of state
// in this case, we only want the cart

const selectCart = state => state.cart;

// Arguments: 1. Array of input selectors
// 2. Function that returns
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
