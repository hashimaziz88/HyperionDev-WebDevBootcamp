// src/components/Header.js
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "#764abc" }} variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
        Brand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products" style={{ color: "white" }}>
            Products
          </Nav.Link>
          <Button type="submit" style={{textAlign:"right"}}>Submit</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
