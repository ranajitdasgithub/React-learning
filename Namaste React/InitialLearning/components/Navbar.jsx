import "../styles/navbar.css";
// import { link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around col-red">
        <li>Home</li>
        <li>Grocery</li>
      </ul>
    </nav>
  );
};
export default Navbar;
