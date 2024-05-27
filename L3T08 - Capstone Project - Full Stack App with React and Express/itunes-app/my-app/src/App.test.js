import React from "react";
import { render, screen } from "@testing-library/react"; // Import screen
import SearchBar from "./components/SearchBar";

test("renders SearchBar component", () => {
  render(<SearchBar />); // Render the component

  // Use screen.getByPlaceholderText instead of getByPlaceholderText
  const searchInput = screen.getByPlaceholderText("Search...");

  // Use screen.getByText instead of getByText
  const searchButton = screen.getByText("Search");

  // Perform assertions
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
