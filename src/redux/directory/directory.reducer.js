import { getSections } from "../../data/directory.data";

const INITIAL_STATE = {
  sections: getSections()
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
