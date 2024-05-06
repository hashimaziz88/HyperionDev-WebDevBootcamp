// Importing necessary dependencies and components
import React from "react";
import { Modal, Button } from "react-bootstrap"; // Importing Modal and Button components from react-bootstrap

// Defining the EditModal functional component
const EditModal = ({ show, onHide }) => {
  // Rendering the EditModal component
  return (
    <Modal show={show} onHide={onHide}>
      {/* Modal header with title and close button */}
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      {/* Modal body for editing todo */}
      <Modal.Body>{/* Edit todo form */}</Modal.Body>
      {/* Modal footer with close and save buttons */}
      <Modal.Footer>
        {/* Close button */}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* Save changes button */}
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal; // Exporting the EditModal component
