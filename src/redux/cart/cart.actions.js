import {
  TOGGLE_CART_VISIBILITY,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART
} from "./cart.types";

export const toggleCartVisibility = () => {
  return {
    type: TOGGLE_CART_VISIBILITY
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
