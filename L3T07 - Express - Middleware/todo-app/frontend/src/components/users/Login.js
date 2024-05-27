// Import the necessary modules and components
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components
import * as Yup from "yup"; // Import Yup for form validation
import "./Login.css"; // Import the CSS file for styling

const Login = ({
  setToken,
  setUser,
  setIsAuthenticated,
  isAuthenticated,
  user,
}) => {
  const navigate = useNavigate(); // Initialize navigate function from React Router
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error message

  // Function to handle logout
  const handleLogout = () => {
    setToken(""); // Clear token
    setUser(""); // Clear user
    localStorage.removeItem("token"); // Remove token from local storage
    localStorage.removeItem("user"); // Remove user from local storage
    setIsAuthenticated(false); // Set authentication status to false
  };

  // Function to handle form submission
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
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.response);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials. Please try again.");
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  // Validation schema for form fields
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email format")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login-container">
      {/* Conditional rendering based on authentication status */}
      {isAuthenticated ? (
        <div className="welcome-container">
          <h1>Welcome back, {user.username}!</h1>
          <p>Click the button below to view your to-do list.</p>
          <div className="button-container">
            <Link to="/" className="home-link">
              View My Todos
            </Link>
          </div>
          <div className="button-container">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="login-form-container">
          <h2>Login</h2>
          <p>Please enter your credentials to log in.</p>
          {/* Display error message if present */}
          {errorMessage && (
            <p className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </p>
          )}
          {/* Formik form for handling form inputs and validation */}
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid }) => (
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
                <button
                  type="submit"
                  className="login-button"
                  disabled={!isValid}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          {/* Login information */}
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
          {/* Link to registration page */}
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="register-link">
              Register now
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
