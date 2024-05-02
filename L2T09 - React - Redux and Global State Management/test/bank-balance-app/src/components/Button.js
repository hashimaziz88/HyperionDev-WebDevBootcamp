import React from "react";
import { Button } from "react-bootstrap";

// This component represents a custom button with Bootstrap styling
// Props:
// - onClick: Function to be called when the button is clicked
// - variant: Variant of the button (e.g., "primary", "success", "danger")
// - text: Text to be displayed on the button
const CustomButton = ({ onClick, variant, text }) => {
  return (
    <Button variant={variant} onClick={onClick} style={{ margin: 15 }}>
      {text}
    </Button>
  );
};

export default CustomButton;
