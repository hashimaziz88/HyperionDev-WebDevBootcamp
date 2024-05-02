// InfoPopup.js
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const InfoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Button variant="info" onClick={togglePopup} style={{ margin: "20px" }}>
        Info
      </Button>
      <Modal show={showPopup} onHide={togglePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Add your to-dos using the input field below. You can delete to-dos
            by clicking the delete button. Edit them using the edit button.
            Clicking the checkbox or pressing the complete button moves the
            to-do item to the completed section.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={togglePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoPopup;
