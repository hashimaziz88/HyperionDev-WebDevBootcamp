import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Home = () => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const handleLogin = () => {
    if (userName.trim() !== "") {
      setLoggedIn(true);
      localStorage.setItem("userName", userName);
      localStorage.setItem("loggedIn", true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    localStorage.removeItem("userName");
    localStorage.removeItem("loggedIn");
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="text-center container">
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
