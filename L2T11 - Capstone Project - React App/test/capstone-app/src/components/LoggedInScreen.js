// LoggedInScreen.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const LoggedInScreen = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <h2>Welcome, {loggedInUser}!</h2>
      <p>You are now logged in.</p>
      <Button variant="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default LoggedInScreen;
