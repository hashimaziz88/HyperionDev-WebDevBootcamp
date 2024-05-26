// src/components/users/Login.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({
  setToken,
  user,
  setUser,
  setIsAuthenticated,
  isAuthenticated,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/todos/login", {
        username,
        password,
      });
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
      setErrorMessage(""); // Reset error message on successful login
    } catch (error) {
      console.error("Error logging in:", error.response);
      if (error.response.status === 401) {
        setErrorMessage("Invalid credentials. Please try again.");
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {isAuthenticated ? (
        <div>
          <h1>Welcome back, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
