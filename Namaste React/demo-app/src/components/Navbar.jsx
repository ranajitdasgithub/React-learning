import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around bg-pink-400">
        <li className="underline decoration-dashed">
          <Link className="text-white" to="/">
            Dashboard
          </Link>
        </li>
        <li className="underline decoration-dotted">
          <Link className="text-white " to="/grocery">
            Grocery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
