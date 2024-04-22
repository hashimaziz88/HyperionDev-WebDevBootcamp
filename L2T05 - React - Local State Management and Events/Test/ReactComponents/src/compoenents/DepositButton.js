// DepositButton.js
import React from "react";
import { Button } from "@mui/material";

const DepositButton = ({ onClick }) => {
  return (
    <Button fullWidth variant="contained" color="primary" onClick={onClick}>
      Deposit
    </Button>
  );
};

export default DepositButton;
