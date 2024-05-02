// InfoPopup.js
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const InfoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="info-popup">
      <Button variant="info" onClick={togglePopup}>Info</Button>
      <Modal show={showPopup} onHide={togglePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Add your todos using the input field above. You can delete todos by clicking the delete button.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={togglePopup}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InfoPopup;
