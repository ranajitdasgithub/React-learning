import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
