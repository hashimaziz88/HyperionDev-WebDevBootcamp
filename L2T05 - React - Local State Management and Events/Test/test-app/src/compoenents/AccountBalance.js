import React from "react";
import { Typography, Paper } from "@mui/material";

const AccountBalance = ({ balance, expectedBalance }) => {
  return (
    <div style={{ align: "center" }}>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          width: "80%",
          marginBottom: "20px",
          backgroundColor: balance >= 0 ? "#d3f7d3" : "#ffcccc",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ color: balance < 0 ? "white" : "black" }}
        >
          Account Balance
        </Typography>
        {balance < 0 && (
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            Warning: Negative Balance!
          </Typography>
        )}
        <Typography variant="h6" align="center" gutterBottom>
          Balance: R{balance.toFixed(2)}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Expected Balance: R{expectedBalance.toFixed(2)}
        </Typography>
      </Paper>
    </div>
  );
};

export default AccountBalance;
