// Counter.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App"; // Assuming you have a Counters component

test("increments the count", () => {
  render(<App />);
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

test("decrements the count", () => {
  render(<App />);
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(screen.getByText("Count: -1")).toBeInTheDocument();
});
