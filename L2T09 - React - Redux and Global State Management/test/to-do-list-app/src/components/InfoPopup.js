// Importing necessary dependencies and components
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"; // Importing Button and Modal components from react-bootstrap

// Defining the InfoPopup functional component
const InfoPopup = () => {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Rendering the InfoPopup component
  return (
    <>
      {/* Button to toggle the visibility of the popup */}
      <Button variant="info" onClick={togglePopup} style={{ margin: "20px" }}>
        Info
      </Button>
      {/* Modal popup for displaying instructions */}
      <Modal show={showPopup} onHide={togglePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Instructions */}
          <p>
            Add your to-dos using the input field below. You can delete to-dos
            by clicking the delete button. Edit them using the edit button.
            Clicking the checkbox or pressing the complete button moves the
            to-do item to the completed section.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button */}
          <Button variant="secondary" onClick={togglePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoPopup; // Exporting the InfoPopup component
