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

const options = ["SHOP BY DEPARTMENT", "MOTHER'S DAY", "ORDER AGAIN"];

function DummyNavbar() {
  return (
    <div className="container">
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            {options.map((option) => (
              <IconButton key={option}>
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

                <ArrowDropDownIcon />
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
              <SearchIcon />
              {"  "}
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DummyNavbar;
