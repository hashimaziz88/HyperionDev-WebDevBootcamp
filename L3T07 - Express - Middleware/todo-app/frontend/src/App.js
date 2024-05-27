import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/sitewide/Navbar";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    // Check if token and user are saved in local storage
    const savedToken = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedToken && savedUser) {
      // If found, set token, user, and authentication status
      setToken(savedToken);
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    // Update local storage when token or user changes
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token, user]);

  // Function to handle logout
  const handleLogout = () => {
    setToken("");
    setUser("");
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar user={user} onLogout={handleLogout} />
      {/* Routes for different components */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              token={token}
              user_id={user._id}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login
              setToken={setToken}
              setUser={setUser}
              user={user}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
