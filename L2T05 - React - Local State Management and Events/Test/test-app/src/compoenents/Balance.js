import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import Navbar from "./Navbar"; // Import the Navbar component
import AccountBalance from "./AccountBalance"; // Import the AccountBalance component

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [customInterestRate, setCustomInterestRate] = useState("");
  const [customFeeRate, setCustomFeeRate] = useState("");
  const [fixedInterestRate, setFixedInterestRate] = useState(5);
  const [fixedFeeAmount, setFixedFeeAmount] = useState(10);
  const [tabValue, setTabValue] = useState(0); // State for managing tabs
  const [transactions, setTransactions] = useState([]); // State for managing transactions

  const calculateExpectedBalance = () => {
    let expectedBalance = balance;
    if (depositAmount !== "") {
      expectedBalance += parseFloat(depositAmount);
    }
    if (withdrawAmount !== "") {
      expectedBalance -= parseFloat(withdrawAmount);
    }
    return expectedBalance;
  };

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount)) {
      setBalance((prevBalance) => prevBalance + amount);
      setDepositAmount("");
      // Add deposit transaction to history
      setTransactions([...transactions, { type: "Deposit", amount }]);
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!isNaN(amount) && balance - amount >= 0) {
      setBalance((prevBalance) => prevBalance - amount);
      setWithdrawAmount("");
      // Add withdrawal transaction to history
      setTransactions([...transactions, { type: "Withdrawal", amount }]);
    } else {
      const negativeAmount = amount - balance;
      if (
        window.confirm(
          `This action would result in a negative balance of R${negativeAmount.toFixed(
            2
          )}. Are you sure you want to proceed?`
        )
      ) {
        setBalance((prevBalance) => prevBalance - amount);
        setWithdrawAmount("");
        // Add withdrawal transaction to history
        setTransactions([...transactions, { type: "Withdrawal", amount }]);
      } else {
        // User cancelled the withdrawal
        // You can handle this case as per your application's logic
      }
    }
  };

  const handleCustomInterest = () => {
    let rate = parseFloat(customInterestRate);
    if (isNaN(rate)) {
      rate = 0; // Set default interest rate if input is empty or not a number
    }
    const interest = (balance * rate) / 100;
    setBalance((prevBalance) => prevBalance + interest);
    setCustomInterestRate("");
    // Add interest transaction to history
    setTransactions([...transactions, { type: "Interest", amount: interest }]);
  };

  const handleCustomFees = () => {
    let rate = parseFloat(customFeeRate);
    if (isNaN(rate)) {
      rate = 0; // Set default fee rate if input is empty or not a number
    }
    const fees = (balance * rate) / 100;
    setBalance((prevBalance) => prevBalance - fees);
    setCustomFeeRate("");
    // Add fee transaction to history
    setTransactions([...transactions, { type: "Fee", amount: fees }]);
  };

  const handleFixedInterest = () => {
    const interest = (balance * fixedInterestRate) / 100;
    setBalance((prevBalance) => prevBalance + interest);
    // Add interest transaction to history
    setTransactions([...transactions, { type: "Interest", amount: interest }]);
  };

  const handleFixedFees = () => {
    setBalance((prevBalance) => prevBalance - fixedFeeAmount);
    // Add fee transaction to history
    setTransactions([...transactions, { type: "Fee", amount: fixedFeeAmount }]);
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Navbar />
      <Box position="sticky" top={0} zIndex={1} bgcolor="white">
        <Box display="flex" justifyContent="center">
          <Tabs
            value={tabValue}
            onChange={handleChangeTab}
            style={{ marginBottom: "20px" }}
          >
            <Tab label="Balance" />
            <Tab label="Transaction History" />
          </Tabs>
        </Box>
        {tabValue === 0 && (
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: balance >= 0 ? "#d3f7d3" : "#ffcccc",
            }}
          >
            <AccountBalance
              balance={balance}
              expectedBalance={calculateExpectedBalance()}
            />
            {/* Deposit & Withdraw content */}
            <Paper
              elevation={3}
              style={{ padding: "20px", marginBottom: "20px" }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Deposit & Withdraw
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Deposit money into your account or withdraw funds.
              </Typography>
              <TextField
                fullWidth
                type="number"
                label="Deposit Amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleDeposit}
                style={{ marginTop: "10px" }}
              >
                Deposit
              </Button>
              <TextField
                fullWidth
                type="number"
                label="Withdraw Amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                margin="normal"
                style={{ marginTop: "10px" }}
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleWithdraw}
                style={{ marginTop: "10px" }}
              >
                Withdraw
              </Button>
            </Paper>
            {/* Interest content */}
            <Paper
              elevation={3}
              style={{ padding: "20px", marginBottom: "20px" }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Interest
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Earn interest on your account balance. Choose either a custom
                interest rate or a fixed interest rate.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleFixedInterest}
                style={{ marginTop: "10px" }}
              >
                Add Fixed Interest Rate (5%)
              </Button>
              <TextField
                fullWidth
                type="number"
                label="Custom Interest Rate (%)"
                value={customInterestRate}
                onChange={(e) => setCustomInterestRate(e.target.value)}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleCustomInterest}
                style={{ marginBottom: "10px" }}
              >
                Apply Custom Interest Rate
              </Button>
            </Paper>
            {/* Fees content */}
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" align="center" gutterBottom>
                Fees
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Fees applied to your account balance. Choose either a custom fee
                rate or a fixed fee amount.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleFixedFees}
                style={{ marginTop: "10px" }}
              >
                Charge Fixed Bank Fees (R10)
              </Button>
              <TextField
                fullWidth
                type="number"
                label="Custom Fee Rate (%)"
                value={customFeeRate}
                onChange={(e) => setCustomFeeRate(e.target.value)}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleCustomFees}
                style={{ marginBottom: "10px" }}
              >
                Apply Custom Fees
              </Button>
            </Paper>
          </Paper>
        )}
        {tabValue === 1 && (
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Transaction History
            </Typography>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.type}: R{transaction.amount.toFixed(2)}
                </li>
              ))}
            </ul>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Balance;
  