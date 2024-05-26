import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      {user ? (
        <div className="nav-user">
          <Link to="/login" className="nav-link">
            My Profile
          </Link>
          <span className="nav-welcome">Welcome, {user.username}!</span>
          <button className="nav-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="nav-auth-links">
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
