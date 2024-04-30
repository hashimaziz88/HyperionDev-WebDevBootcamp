// Counter.js
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/counterState";

export default function Counter() {
  // useSelector function to get the state from the store
  const state = useSelector((state) => state.counter);
  // dispatch function to execute reducer functions
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>Counter is: {state.value}</h1>
      <div className="btn-container">
        <Button variant="success" onClick={() => dispatch(increment())}>
          Increment by 1
        </Button>
        <Button variant="danger" onClick={() => dispatch(decrement(2))}>
          Decrement by -2
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(incrementByAmount(25))}
        >
          Increment by 25
        </Button>
      </div>
    </div>
  );
}
