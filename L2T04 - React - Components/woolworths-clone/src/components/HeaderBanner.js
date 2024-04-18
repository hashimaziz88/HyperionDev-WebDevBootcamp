import React from "react";
import "./HeaderBanner.css"; // Import your CSS file
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PlaceIcon from "@mui/icons-material/Place";
import LockIcon from "@mui/icons-material/Lock";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

// Component for displaying an icon with text
function IconWithText({ icon: IconComponent, text, fontSize }) {
  // Inline styles for the component
  const componentStyles = {
    iconContainer: {
      display: "flex",
      alignItems: "center", // Align items vertically center
    },
    spacer: {
      marginLeft: "10px", // Add some spacing between icon and text
      fontSize: fontSize || 20, // Default font size or provided font size
    },
  };

  // Render the icon with text
  return (
    <div style={componentStyles.iconContainer}>
      <IconComponent style={componentStyles.spacer} />
      <span>{text}</span>
    </div>
  );
}

// Header banner component
function HeaderBanner() {
  return (
    <header className="header-banner">
      <div className="container">
        <div className="row banner-text">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Icons with text */}
            <div style={{ display: "flex" }}>
              <IconWithText icon={CreditCardIcon} text="FINANCIAL SERVICES" />
              <IconWithText icon={WorkspacePremiumIcon} text="WREWARDS" />
              <IconWithText icon={PlaceIcon} text="STORES" />
              <IconWithText icon={WifiCalling3Icon} text="CUSTOMER SUPPORT" />
            </div>
            <div style={{ display: "flex" }}>
              <IconWithText icon={LockIcon} text="SAFE AND SECURE" />
              <IconWithText icon={SwapHorizIcon} text="EASY RETURNS" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBanner;
