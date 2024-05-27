// /src/components/ResultsList.js

import React from "react";

const ResultsList = ({ results, onFavouriteToggle }) => {
  return (
    <div className="results-list">
      <h2>Results</h2>
      <div className="results">
        {results.map((result) => (
          <div
            key={result.trackId || result.collectionId}
            className="result-item"
          >
            <img
              src={result.artworkUrl100}
              alt={result.collectionName || result.trackName}
            />
            <div className="result-details">
              <h3>{result.collectionName || result.trackName}</h3>
              <p>{result.artistName}</p>
              <p>{new Date(result.releaseDate).toLocaleDateString()}</p>
              <p className="media-type">{result.kind || result.wrapperType}</p>
            </div>
            <button onClick={() => onFavouriteToggle(result)}>
              {result.isFavourite ? "Unfavourite" : "Favourite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
