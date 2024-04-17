import React, { useState } from "react";

const SignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? "active" : ""}`}>
      <div className="popup-content">
        <h2>Sign Up</h2>
        <p>Enter your details below (no information is submitted):</p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" disabled />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" disabled />
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
};

export default SignupPopup;
