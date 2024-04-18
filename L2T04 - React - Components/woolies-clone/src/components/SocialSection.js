import React from "react";
import "./SocialSection.css";
import { IconButton } from "@mui/material";

function SocialSection() {
  return (
    <div className="container">
      <div className="social-section">
        {/* Social media links here */}
        <span>SOCIAL WITH WOOLIES</span>
        <p>
          What does Woolies look like in your world? Tag @woolworths_sa in your
          instagram pics and get featured below.
        </p>
        <IconButton target="blank" href="https://www.woolworths.co.za/">
          VIEW MORE
        </IconButton>
      </div>
    </div>
  );
}

export default SocialSection;
