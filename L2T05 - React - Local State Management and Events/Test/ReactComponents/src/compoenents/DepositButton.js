// DepositButton.js
import React from "react";
import { Button } from "@mui/material";

// DepositButton component takes onClick function as prop
const DepositButton = ({ onClick }) => {
  return (
    // Button component triggering onClick function when clicked
    <Button fullWidth variant="contained" color="primary" onClick={onClick}>
      Deposit
    </Button>
  );
};

export default DepositButton; // Export the DepositButton component
