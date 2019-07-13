import { TOGGLE_CART_VISIBILITY, ADD_ITEM } from "./cart.types";

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
