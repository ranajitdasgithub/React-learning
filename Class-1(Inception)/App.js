import React from "react";
import ReactDOM from "react-dom/client";

//React element=> React element js-object=>render as a html element
const heading = React.createElement(
  "h1",
  { class: "heading", id: "header" },
  "Hello World from React"
);
// JSX=>React element=> React element js-object=>render as a html element
//JSX code will transpile by Parcel-> Babel converts this code for react before executing to the js engine
let jsxHeading = <h1 className="heading">Hello from JSX</h1>;
console.log(jsxHeading); //This will same as react element object

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
