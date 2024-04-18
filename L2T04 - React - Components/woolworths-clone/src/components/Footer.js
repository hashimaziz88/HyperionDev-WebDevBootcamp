import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import WoolworthsLogoWhite from "../images/woolworths-logo.svg";
import PlayStore from "../images/google-play-store.svg";
import AppGallery from "../images/app-gallery-store.svg";
import AppleStore from "../images/apple-store-app.svg";

// Footer component
const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        {/* Footer content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
            bgcolor: "white",
          }}
        >
          {/* Company logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={WoolworthsLogoWhite}
              alt="Company Logo"
              className="footer-logo"
            />
          </Box>
          {/* Links to app stores */}
          <Box sx={{ display: "flex" }}>
            {/* Link to Google Play Store */}
            <Link href="#" underline="none">
              <IconButton>
                <img src={PlayStore} href="#" alt="" />
              </IconButton>
            </Link>
            {/* Link to AppGallery */}
            <Link href="#" underline="none" sx={{ marginLeft: "16px" }}>
              <IconButton>
                <img src={AppGallery} href="#" alt="" />
              </IconButton>
            </Link>
            {/* Link to Apple App Store */}
            <Link href="#" underline="none" sx={{ marginLeft: "16px" }}>
              <IconButton>
                <img src={AppleStore} href="#" alt="" />
              </IconButton>
            </Link>
          </Box>
        </Box>
        {/* Disclaimer */}
        <div className="container" style={{ textAlign: "center" }}>
          <a href="https://www.woolworths.co.za/" target="blank">
            {" "}
            This clone was created for hyperion dev Project from Woolworths
            Website @ https://www.woolworths.co.za/
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
