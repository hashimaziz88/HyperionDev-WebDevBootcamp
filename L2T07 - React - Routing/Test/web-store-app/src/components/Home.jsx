import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";

const Home = () => {
  // State variables for user name, login status, and name empty validation
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [nameEmpty, setNameEmpty] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    if (userName.trim() !== "") {
      setLoggedIn(true);
      localStorage.setItem("userName", userName);
      localStorage.setItem("loggedIn", true);
      setNameEmpty(false); // Reset the nameEmpty state
    } else {
      setNameEmpty(true); // Set nameEmpty state to true if name is empty
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    localStorage.removeItem("userName");
    localStorage.removeItem("loggedIn");
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our Online Store!</h1>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              {loggedIn ? (
                <>
                  <h2>Welcome {userName}!</h2>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Group>
                  {nameEmpty && (
                    <Alert variant="danger">Please enter your name.</Alert>
                  )}
                  <Button variant="primary" onClick={handleLogin}>
                    Login
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h3>Featured Products</h3>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="Product"
              style={{ height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>Description of Product 1.</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <h3>Special Offers</h3>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="Offer"
              style={{ height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Offer 1</Card.Title>
              <Card.Text>Details of Offer 1.</Card.Text>
              <Button variant="success">Claim Offer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
