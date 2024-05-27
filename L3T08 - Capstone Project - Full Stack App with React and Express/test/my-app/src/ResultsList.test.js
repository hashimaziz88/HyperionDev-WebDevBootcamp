import React from "react";
import { render, screen } from "@testing-library/react";
import ResultsList from "./components/ResultsList";

// Test to render the ResultsList component
test("renders ResultsList component", () => {
  // Sample results data
  const results = [
    {
      trackId: 1,
      artworkUrl100: "example.jpg",
      collectionName: "Example Collection",
      artistName: "Example Artist",
      releaseDate: new Date().toISOString(),
      kind: "album",
    },
  ];

  // Render the ResultsList component with sample data
  const { getByText, getByAltText } = render(<ResultsList results={results} />);

  // Check if the title, artist name, and image are rendered correctly
  const titleElement = screen.getByText("Example Collection");
  const artistElement = screen.getByText("Example Artist");
  const imageElement = screen.getByAltText("Example Collection");

  // Assertions to check if elements are present in the DOM
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
