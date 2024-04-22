// FeesButton.js
import React from "react";
import { Button } from "@mui/material";

const FeesButton = ({ onClick }) => {
  return (
    <Button fullWidth variant="contained" color="secondary" onClick={onClick}>
      Charge Fees
    </Button>
  );
};

export default FeesButton;
