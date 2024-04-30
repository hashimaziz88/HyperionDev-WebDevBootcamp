// Button.js
import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ onClick, variant, text }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
