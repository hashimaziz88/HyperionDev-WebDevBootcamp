import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

// Navbar component
const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      {/* Conditional rendering based on user authentication */}
      {user ? (
        // If user is authenticated
        <Link to="/" className="nav-link">
          My Todos
        </Link>
      ) : (
        // If user is not authenticated
        <Link to="/" className="nav-link">
          Home
        </Link>
      )}
      {/* Conditionally render based on user authentication */}
      {user ? (
        // If user is authenticated
        <div className="nav-user">
          {/* Link to user profile */}
          <Link to="/login" className="nav-link">
            My Profile
          </Link>
          <span className="nav-welcome">Welcome, {user.username}!</span>
          <button className="nav-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        // If user is not authenticated
        <div className="nav-auth-links">
          {/* Link to login */}
          <Link to="/login" className="nav-link">
            Login
          </Link>
          {/* Link to register */}
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
