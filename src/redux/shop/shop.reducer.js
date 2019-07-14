import { getCollections } from "../../data/collections.data.js";

const INITIAL_STATE = {
  collections: getCollections()
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
