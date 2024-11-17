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

//////Redux-persist////////

// import { createStore, applyMiddleware } from "redux";
// import { combineReducers } from "redux";
// import thunk from "redux-thunk"; // Fix import for thunk
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

// import authReducer from "./reducers/authReducer";
// import productReducer from "./reducers/productReducer";

// // Configuration for Redux Persist
// const persistConfig = {
//   key: "root", // Root key for persisted state
//   storage,     // Storage engine (localStorage in this case)
//   whitelist: ["auth", "product"], // Only persist these reducers (optional)
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   auth: authReducer,
//   product: productReducer,
// });

// // Wrap rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the Redux store with persisted reducer and middleware
// const store = createStore(persistedReducer, applyMiddleware(thunk));

// // Create a persistor instance
// const persistor = persistStore(store);

// export { store, persistor };
