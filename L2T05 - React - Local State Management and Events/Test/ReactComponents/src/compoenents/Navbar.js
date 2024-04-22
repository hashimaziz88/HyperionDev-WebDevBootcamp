import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

// Navbar component for displaying the application title
const Navbar = () => {
  return (
    // AppBar component for the top navigation bar
    <AppBar position="static">
      <Toolbar>
        {/* Typography component for the title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Banking Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; // Export the Navbar component
