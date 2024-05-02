// InfoPopup.js
import React, { useState } from "react";

const InfoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-popup">
      <button onClick={() => setIsOpen(true)}>Info</button>
      {isOpen && (
        <div className="popup-content">
          <h2>Instructions</h2>
          <p>Click "Add Todo" to add a new todo.</p>
          <p>Click "Complete" to mark a todo as completed.</p>
          <p>Click "Delete" to remove a todo.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;
