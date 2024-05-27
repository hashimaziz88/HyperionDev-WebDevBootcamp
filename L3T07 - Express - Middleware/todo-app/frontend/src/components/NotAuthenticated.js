// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";
import "./users/Login.css"; // Import the CSS file

const NotAuthenticated = () => {
  return (
    <div className="not-authenticated-container">
      <h2>Welcome to the To-Do List Application</h2>
      <p>
        This is a full-stack React application where you can manage your tasks
        effectively. To get started, please log in or register for an account.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Register and log in to access your personal to-do list.</li>
        <li>Add new tasks to your to-do list.</li>
        <li>Edit existing tasks to update their details.</li>
        <li>Delete tasks that are no longer needed.</li>
        <li>
          Secure endpoints ensuring only logged-in users can manage tasks.
        </li>
      </ul>
      <h3>Middleware Security:</h3>
      <ul>
        <li>
          Only users with '@gmail.com' email addresses can access the
          application.
        </li>
        <li>Tasks cannot exceed 140 characters in name or description.</li>
        <li>All requests must be of the JSON content type.</li>
      </ul>
      <p>Please log in or register to start managing your to-dos.</p>
      {/* Links to login and register pages */}
      <div className="auth-links">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
