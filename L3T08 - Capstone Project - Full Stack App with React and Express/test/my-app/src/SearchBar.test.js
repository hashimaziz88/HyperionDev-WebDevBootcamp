import React from "react";
import { render, act } from "@testing-library/react";
import SearchBar from "./components/SearchBar"; // Adjust the path to match the location of SearchBar.js

test("renders SearchBar component", () => {
  const { getByPlaceholderText, getByText } = render(<SearchBar />);
  const searchInput = getByPlaceholderText("Search...");
  const searchButton = getByText("Search");
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
