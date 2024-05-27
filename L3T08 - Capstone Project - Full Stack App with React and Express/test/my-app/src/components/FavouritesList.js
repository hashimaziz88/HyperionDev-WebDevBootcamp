// /src/components/FavouritesList.js
import React from "react";

// FavouritesList Component: Renders a list of favorite items with details and a remove button.
const FavouritesList = ({ favourites, onRemove }) => {
  return (
    <div>
      {/* Title */}
      <h2>Favourites</h2>
      {/* List of favourites */}
      <div className="favourites">
        {/* Map through favourites array */}
        {favourites.map((favourite) => (
          <div key={favourite.collectionId} className="favourite-item">
            {/* Image */}
            <img src={favourite.artworkUrl100} alt={favourite.collectionName} />
            {/* Title */}
            <h3>{favourite.collectionName || favourite.trackName}</h3>
            {/* Artist */}
            <p>{favourite.artistName}</p>
            {/* Release date */}
            <p>{new Date(favourite.releaseDate).toLocaleDateString()}</p>
            {/* Media type */}
            <p className="media-type">
              {favourite.kind || favourite.wrapperType}
            </p>
            {/* Remove button */}
            <button onClick={() => onRemove(favourite)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesList;
