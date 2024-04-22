import React from "react";
import { Typography, Paper } from "@mui/material";

// AccountBalance component takes two props: balance and expectedBalance
const AccountBalance = ({ balance, expectedBalance }) => {
  return (
    <div style={{ align: "center" }}>
      {/* Paper component from Material-UI with some styles */}
      <Paper
        elevation={3} // Elevation level for shadow effect
        style={{
          padding: "20px", // Padding around the content
          width: "80%", // Width of the paper
          marginBottom: "20px", // Margin at the bottom
          backgroundColor: balance >= 0 ? "#d3f7d3" : "#ffcccc", // Background color based on balance
          alignContent: "center", // Align content to the center
        }}
      >
        {/* Typography for displaying the title */}
        <Typography
          variant="h5" // Heading variant
          align="center" // Text alignment
          gutterBottom // Add bottom margin
          style={{ color: balance < 0 ? "white" : "black" }} // Text color based on balance
        >
          Account Balance
        </Typography>
        {/* Display warning message if balance is negative */}
        {balance < 0 && (
          <Typography
            variant="body1" // Body text variant
            align="center" // Text alignment
            gutterBottom // Add bottom margin
            style={{ color: "white" }} // Text color
          >
            Warning: Negative Balance!
          </Typography>
        )}
        {/* Display current balance */}
        <Typography variant="h6" align="center" gutterBottom>
          Balance: R{balance.toFixed(2)} {/* Format and display balance */}
        </Typography>
        {/* Display expected balance */}
        <Typography variant="h6" align="center" gutterBottom>
          Expected Balance: R{expectedBalance.toFixed(2)}{" "}
          {/* Format and display expected balance */}
        </Typography>
      </Paper>
    </div>
  );
};

export default AccountBalance; // Export the AccountBalance component
