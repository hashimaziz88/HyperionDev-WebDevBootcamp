import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

// Options for the navbar dropdown
const options = ["SHOP BY DEPARTMENT", "MOTHER'S DAY", "ORDER AGAIN"];

// DummyNavbar component
function DummyNavbar() {
  return (
    <div className="container">
      {/* App bar for the navbar */}
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }} // Styling for app bar
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {" "}
          {/* Toolbar content */}
          <div>
            {/* Map through options to render dropdown items */}
            {options.map((option) => (
              <IconButton key={option}>
                {" "}
                {/* IconButton for dropdown */}
                {/* Typography for dropdown text */}
                <Typography
                  variant="body1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "flex", md: "flex" }, // Adjusted display property for xs screen size
                    alignItems: "center", // Align the text vertically with the icon
                    mr: 2, // Add margin to separate items
                  }}
                >
                  {option}
                </Typography>
                <ArrowDropDownIcon /> {/* Arrow dropdown icon */}
              </IconButton>
            ))}
          </div>
          <div>
            <div sx={{ position: "relative" }}>
              <div
                sx={{
                  position: "absolute",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              ></div>
              <SearchIcon /> {/* Search icon */}
              {"  "}
              <InputBase
                placeholder="Search…" // Placeholder text for search input
                inputProps={{ "aria-label": "search" }} // ARIA label for accessibility
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DummyNavbar;
