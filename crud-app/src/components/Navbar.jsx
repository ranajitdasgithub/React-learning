import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
