// /src/components/ResultsList.js

import React from "react";

// ResultsList Component: Renders a list of search results with details and a favourite button.
const ResultsList = ({ results, onFavouriteToggle }) => {
  return (
    <div className="results-list">
      {/* Title */}
      <h2>Results</h2>
      {/* List of results */}
      <div className="results">
        {/* Map through results array */}
        {results.map((result) => (
          <div
            key={result.trackId || result.collectionId}
            className="result-item"
          >
            {/* Image */}
            <img
              src={result.artworkUrl100}
              alt={result.collectionName || result.trackName}
            />
            {/* Details */}
            <div className="result-details">
              {/* Title */}
              <h3>{result.collectionName || result.trackName}</h3>
              {/* Artist */}
              <p>{result.artistName}</p>
              {/* Release date */}
              <p>{new Date(result.releaseDate).toLocaleDateString()}</p>
              {/* Media type */}
              <p className="media-type">{result.kind || result.wrapperType}</p>
            </div>
            {/* Favourite button */}
            <button onClick={() => onFavouriteToggle(result)}>
              {/* Toggle favourite button text */}
              {result.isFavourite ? "Unfavourite" : "Favourite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
