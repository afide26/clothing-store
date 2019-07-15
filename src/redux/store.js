import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

// Only push logger to the middlewares array in development mode
// Don't include logger in production
if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default { store, persistor };
