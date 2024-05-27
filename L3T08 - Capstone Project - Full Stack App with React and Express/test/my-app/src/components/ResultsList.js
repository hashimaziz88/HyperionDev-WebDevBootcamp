import React from "react";

const ResultsList = ({ results, onFavouriteToggle }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.trackId || result.collectionId}>
          <img src={result.artworkUrl100} alt={result.collectionName} />
          <h3>{result.collectionName || result.trackName}</h3>
          <p>{result.artistName}</p>
          <p>{result.releaseDate}</p>
          <button onClick={() => onFavouriteToggle(result)}>Favourite</button>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
