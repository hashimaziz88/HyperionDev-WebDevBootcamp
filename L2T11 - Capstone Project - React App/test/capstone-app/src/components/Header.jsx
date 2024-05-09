import React from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import TotalPrice from "./TotalPrice"; // Import TotalPrice component

function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);

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
        </Nav>
        <Nav>
          {/* Non-pressable button to display total price */}
          <Button as={Link} to="/cart" variant="outline-light">
            <FaShoppingCart style={{ marginRight: "5px" }} />
            Cart <Badge bg="danger">{cartItemsCount}</Badge>
          </Button>
          <Button as={Link} to="/login" variant="outline-light">
            Login
          </Button>
          <Button as={Link} to="/register" variant="outline-light">
            Register
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
