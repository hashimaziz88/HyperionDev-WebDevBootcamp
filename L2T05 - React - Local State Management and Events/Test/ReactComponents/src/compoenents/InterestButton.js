// InterestButton.js
import React from "react";
import { Button } from "@mui/material";

// InterestButton component takes onClick function as prop
const InterestButton = ({ onClick }) => {
  return (
    // Button component triggering onClick function when clicked
    <Button fullWidth variant="contained" color="primary" onClick={onClick}>
      Add Interest
    </Button>
  );
};

export default InterestButton; // Export the InterestButton component
