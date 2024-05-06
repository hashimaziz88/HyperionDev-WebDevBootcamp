import React from "react";
import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Greetings component snapshot", () => {
  render(<Greetings />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
