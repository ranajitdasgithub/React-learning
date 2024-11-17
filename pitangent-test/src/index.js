import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Optional for styling
import App from "./App"; // Your main App component
import { Provider } from "react-redux"; // Redux Provider to pass the store
import store from "./redux/store"; // Import the Redux store
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

// Create the root element for ReactDOM (for React 18 and later)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your App in the Redux Provider to give access to the Redux store
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css"; // Optional for styling
// import App from "./App"; // Your main App component
// import { Provider } from "react-redux"; // Redux Provider to pass the store
// import { PersistGate } from "redux-persist/integration/react"; // PersistGate for redux-persist
// import { store, persistor } from "./redux/store"; // Import the Redux store and persistor
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

// // Create the root element for ReactDOM (for React 18 and later)
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Wrap your App in Redux Provider and PersistGate
// root.render(
//   <Provider store={store}>
//     <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>
// );
