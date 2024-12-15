import React from "react";
import ReactDOM from "react-dom/client";
import UserClass from "./UserClass";
import UserClassApi from "./UserClassApi";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";

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

//React component without using return
let Title = () => <h1>React heading component using arrow function</h1>;
//using return react component
let HeadingComponent2 = () => {
  // const restaurantInfo= useRestaurantMenu(resId); //custom hooks
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <>
        <h3>Online Status : {onlineStatus ? "✅" : "🔴"}</h3>
        <h1>You're offline!! Please check your internet connection</h1>
      </>
    );
  }
  return (
    <>
      {/* //We can call the component as a function */}
      <h3>Online Status : {onlineStatus ? "✅" : "🔴"}</h3>
      {Title()}
      <Title />
      <h1 className="heading">React component using return</h1>
      {/* <UserClass name="Ranajit" place="Kolkata" /> */}
      <UserClassApi />
    </>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
