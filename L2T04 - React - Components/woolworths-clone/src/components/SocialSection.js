import React from "react";
import "./SocialSection.css"; // Import CSS file
import { IconButton } from "@mui/material";

// SocialSection component
function SocialSection() {
  return (
    <div className="container">
      {/* Container for social section */}
      <div className="social-section">
        {/* Title */}
        <span>SOCIAL WITH WOOLIES</span>
        {/* Description */}
        <p>
          What does Woolies look like in your world? Tag @woolworths_sa in your
          instagram pics and get featured below.
        </p>
        {/* Button to view more */}
        <IconButton target="_blank" href="https://www.woolworths.co.za/">
          VIEW MORE
        </IconButton>
      </div>
    </div>
  );
}

export default SocialSection;
