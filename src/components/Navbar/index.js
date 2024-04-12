import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from "../../images/menu.png"



const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <header>
      <h1>
        <Link to="/" className="header-name">
          Kauri CW Art
        </Link>
      </h1>
      <Button variant="link" className="d-sm-none menu-button" onClick={handleShow}><img src={menu} />
      </Button>
      <ul className="ul-nav d-none d-sm-block">
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
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Navigate</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </header>
  );
};
export default Navbar;
