import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = (props) => {
  return (
    <header>
      <h1>
        <Link to="/" className="header-name">
          Kauri CW Art
        </Link>
      </h1>
      <ul className="ul-nav">
        <li className="li-nav">
          <Link to="/about" className="a-nav">
            About
          </Link>
        </li>
        <li className="li-nav">
          <Link to="/portfolio" className="a-nav">
            Portfolio
          </Link>
        </li>
        <li className="li-nav">
          <Link to="/sale"
            className="a-nav"
            
          >
            For Sale
          </Link>
        </li>
        <li className="li-nav ">
          <Link to="/cart"
            className="a-nav"
            
          >
            🛒
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
