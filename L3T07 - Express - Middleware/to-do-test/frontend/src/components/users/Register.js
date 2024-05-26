// src/components/users/Register.js

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/todos/register",
        {
          username,
          password,
        }
      );
      console.log("Registration successful:", response.data);
      // Optionally, redirect to another page on successful registration
    } catch (error) {
      console.error("Error registering:", error.response);
      if (error.response.status === 403) {
        setErrorMessage("Error: Email must end with '@gmail.com'");
      } else {
        setErrorMessage(
          "An error occurred during registration. Please try again."
        );
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Register;
