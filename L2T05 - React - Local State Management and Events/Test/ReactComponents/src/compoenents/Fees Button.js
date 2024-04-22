// FeesButton.js
import React from "react";
import { Button } from "@mui/material";

// FeesButton component takes onClick function as prop
const FeesButton = ({ onClick }) => {
  return (
    // Button component triggering onClick function when clicked
    <Button fullWidth variant="contained" color="secondary" onClick={onClick}>
      Charge Fees
    </Button>
  );
};

export default FeesButton; // Export the FeesButton component
