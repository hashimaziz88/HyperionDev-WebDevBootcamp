import React from "react";
import { render } from "@testing-library/react";
import FavouritesList from "./components/FavouritesList";

test("renders FavouritesList component", () => {
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
  const { getByText, getByAltText } = render(
    <FavouritesList favourites={favourites} />
  );
  const titleElement = getByText("Example Collection");
  const artistElement = getByText("Example Artist");
  const imageElement = getByAltText("Example Collection");
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
