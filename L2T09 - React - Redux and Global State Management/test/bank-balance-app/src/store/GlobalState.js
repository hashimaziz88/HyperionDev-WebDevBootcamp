// GlobalState.js
import React, { useReducer, useState } from "react";

const initialState = {
  balance: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    case "ADD_INTEREST":
      return { balance: state.balance * 1.05 };
    case "CHARGES":
      return { balance: state.balance * 0.85 };
    default:
      return state;
  }
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState("");

  return <div>{children({ state, dispatch, amount, setAmount })}</div>;
};

export default GlobalState;
