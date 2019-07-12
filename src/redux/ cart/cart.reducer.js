import { TOGGLE_CART_VISIBILITY } from "./cart.types";

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
