import React from "react";
import { Link } from "react-router-dom";

const NoUserMessage = () => {
  return (
    <div className="no-user-message">
      <p>No user logged in. Please log in to use the To-Do app or register.</p>
      <div>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <span> or </span>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NoUserMessage;
