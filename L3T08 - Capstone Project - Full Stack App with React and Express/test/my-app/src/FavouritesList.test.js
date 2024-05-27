import React from "react";
import { render, screen } from "@testing-library/react";
import FavouritesList from "./components/FavouritesList";

// Test to render the FavouritesList component
test("renders FavouritesList component", () => {
  // Sample favourites data
  const favourites = [
    {
      collectionId: 1,
      artworkUrl100: "example.jpg",
      collectionName: "Example Collection",
      artistName: "Example Artist",
      releaseDate: new Date().toISOString(),
      kind: "album",
    },
  ];

  // Render the FavouritesList component with sample data
  const { getByText, getByAltText } = render(
    <FavouritesList favourites={favourites} />
  );

  // Check if the title, artist name, and image are rendered correctly
  const titleElement = screen.getByText("Example Collection");
  const artistElement = screen.getByText("Example Artist");
  const imageElement = screen.getByAltText("Example Collection");

  // Assertions to check if elements are present in the DOM
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
