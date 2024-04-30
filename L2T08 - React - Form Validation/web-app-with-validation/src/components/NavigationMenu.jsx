import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationMenu.css"; // Import custom CSS file
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="container">
      {/* Navigation bar */}
      <Navbar bg="light" expand="lg" collapseOnSelect>
        {/* Brand name */}
        <Navbar.Brand href="/">Your Brand Name</Navbar.Brand>
        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Home link */}
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            {/* Products link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                Products
              </Link>
            </li>
            {/* About link */}
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/about">
                About
              </Link>
            </li>
            {/* Login link */}
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/login">
                Login
              </Link>
            </li>
            {/* Registration link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/register"
              >
                Registration
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationMenu;
