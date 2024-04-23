// Home.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TotalPrice from "./TotalPrice";

const Home = ({ setTotalPrice }) => {
  const [userName, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (userName.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <div className="text-center">
      <h1>Welcome to Our Online Store!</h1>
      
      <div className="mt-5">
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
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Home;
