import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationMenu.css"; // Import your custom CSS file
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Navbar.Brand href="/">Your Brand Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/about">
                About
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationMenu;
