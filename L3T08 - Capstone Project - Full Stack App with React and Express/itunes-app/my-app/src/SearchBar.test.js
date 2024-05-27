import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./components/SearchBar"; // Adjust the path to match the location of SearchBar.js

test("renders SearchBar component", () => {
  // Render the component without wrapping it in act
  render(<SearchBar />);

  // Use screen.getByPlaceholderText instead of getByPlaceholderText
  const searchInput = screen.getByPlaceholderText("Search...");

  // Use screen.getByText instead of getByText
  const searchButton = screen.getByText("Search");

  // Perform assertions
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
