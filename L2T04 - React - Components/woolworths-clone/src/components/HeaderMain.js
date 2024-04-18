import WoolworthsLogoWhite from "../images/woolworths-logo.svg";
import "./HeaderMain.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

// Component for displaying an icon with text
function IconWithText({ icon: IconComponent, text, customSize }) {
  // Inline styles for the component
  const componentStyles = {
    iconContainer: {
      display: "flex",
      alignItems: "center",
    },
    spacer: {
      marginLeft: "10px", // Add margin between icon and text
      fontSize: customSize || 20, // Apply custom size if provided
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

// Main header component
function HeaderMain() {
  return (
    <header className="header-main">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-styling">
            <img src={WoolworthsLogoWhite} alt="" />
          </div>
          {/* Icons container */}
          <div className="icons-container">
            {/* Sign in/Register */}
            <IconButton size="small">
              <a href="#">
                <IconWithText
                  icon={AccountCircleIcon}
                  text="Sign in/Register"
                />
              </a>
            </IconButton>
            {/* Delivery Address */}
            <IconButton size="small">
              <a>
                <IconWithText icon={PlaceIcon} text="Delivery Address" />
              </a>
            </IconButton>
            {/* Shopping Cart */}
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
