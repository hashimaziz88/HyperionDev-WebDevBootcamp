import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css"; // Import the CSS file for styling

const Login = ({
  setToken,
  user,
  setUser,
  setIsAuthenticated,
  isAuthenticated,
}) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/todos/login",
        values
      );
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
      setErrorMessage(""); // Reset error message on successful login
      navigate("/"); // Navigate to home or another page after successful login
    } catch (error) {
      console.error("Error logging in:", error.response);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials. Please try again.");
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email format")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <div className="welcome-container">
          <h1>Welcome back, {user.username}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-form-container">
          <h2>Login</h2>
          <p>Please enter your credentials to log in.</p>
          {errorMessage && (
            <p className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </p>
          )}
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </Form>
          </Formik>
          <div className="login-info">
            <h3>Login Information for Coding Mentor</h3>
            <p>Use the following credentials to log in:</p>
            <ul>
              <li>
                Username: <b>hashim@gmail.com</b>
              </li>
              <li>
                Password: <b>hashim123</b>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
