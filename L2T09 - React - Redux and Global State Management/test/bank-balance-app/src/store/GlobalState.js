import React, { useReducer, useState } from "react";

// Initial state of the global state
const initialState = {
  balance: 0,
};

// Reducer function to handle state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload }; // Increase balance by deposit amount
    case "WITHDRAW":
      return { balance: state.balance - action.payload }; // Decrease balance by withdrawal amount
    case "ADD_INTEREST":
      return { balance: state.balance * 1.05 }; // Add interest of 5%
    case "CHARGES":
      return { balance: state.balance * 0.85 }; // Apply charges of 15%
    default:
      return state;
  }
};

// GlobalState component to provide global state to child components
const GlobalState = ({ children }) => {
  // useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);
  // useState hook to manage local state for amount input
  const [amount, setAmount] = useState("");

  // Render children components with state and dispatch function as props
  return <div>{children({ state, dispatch, amount, setAmount })}</div>;
};

export default GlobalState;
