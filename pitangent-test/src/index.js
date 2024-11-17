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
