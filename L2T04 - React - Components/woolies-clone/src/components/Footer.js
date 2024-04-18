import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import WoolworthsLogoWhite from "../images/woolworths-logo.svg";
import PlayStore from "../images/google-play-store.svg";
import AppGallery from "../images/app-gallery-store.svg";
import AppleStore from "../images/apple-store-app.svg";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
            bgcolor: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={WoolworthsLogoWhite}
              alt="Company Logo"
              className="footer-logo"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link href="#" underline="none">
              <IconButton>
                <img src={PlayStore} href="#" />
              </IconButton>
            </Link>
            <Link href="#" underline="none" sx={{ marginLeft: "16px" }}>
              <IconButton>
                <img src={AppGallery} href="#" />
              </IconButton>
            </Link>
            <Link href="#" underline="none" sx={{ marginLeft: "16px" }}>
              <IconButton>
                <img src={AppleStore} href="#" />
              </IconButton>
            </Link>
          </Box>
        </Box>
        <div className="container" style={{ textAlign: "center" }} >
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
