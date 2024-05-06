import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders correctly", () => {
  render(<App />);
  expect(screen.getByText("Simple Counter App")).toBeInTheDocument();
});
