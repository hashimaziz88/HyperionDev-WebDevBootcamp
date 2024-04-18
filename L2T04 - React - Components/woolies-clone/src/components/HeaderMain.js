import React, { useState } from "react";
import WoolworthsLogoWhite from "../images/woolworths-logo.svg";
import "./HeaderMain.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

function IconWithText({ icon: IconComponent, text, customSize }) {
  const componentStyles = {
    iconContainer: {
      display: "flex",
      alignItems: "center",
    },
    spacer: {
      marginLeft: "10px",
      fontSize: customSize || 20, // Apply custom size if provided
    },
  };

  return (
    <div style={componentStyles.iconContainer}>
      <IconComponent style={componentStyles.spacer} />
      <span>{text}</span>
    </div>
  );
}

function HeaderMain() {
  return (
    <header className="header-main">
      <div className="container">
        <div className="header-content">
          <div className="logo-styling">
            <img src={WoolworthsLogoWhite} alt="" />
          </div>
          <div className="icons-container">
            <IconButton size="small">
              <a>
                <IconWithText
                  icon={AccountCircleIcon}
                  text="Sign in/Register"
                />
              </a>
            </IconButton>
            <IconButton size="small">
              <a>
                <IconWithText icon={PlaceIcon} text="Delivery Address" />
              </a>
            </IconButton >
            <IconButton>
              <IconWithText icon={ShoppingCartIcon} text="" customSize={28} />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
