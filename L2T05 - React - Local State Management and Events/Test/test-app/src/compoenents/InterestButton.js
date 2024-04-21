// InterestButton.js
import React from "react";
import { Button } from "@mui/material";

const InterestButton = ({ onClick }) => {
  return (
    <Button fullWidth variant="contained" color="primary" onClick={onClick}>
      Add Interest
    </Button>
  );
};

export default InterestButton;
