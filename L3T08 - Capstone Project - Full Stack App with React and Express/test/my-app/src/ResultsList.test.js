import React from "react";
import { render } from "@testing-library/react";
import ResultsList from "./components/ResultsList";

test("renders ResultsList component", () => {
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
  const { getByText, getByAltText } = render(<ResultsList results={results} />);
  const titleElement = getByText("Example Collection");
  const artistElement = getByText("Example Artist");
  const imageElement = getByAltText("Example Collection");
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
