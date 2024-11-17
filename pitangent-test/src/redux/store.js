// src/store.js

import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Use named import for thunk

import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the store
export default store;
