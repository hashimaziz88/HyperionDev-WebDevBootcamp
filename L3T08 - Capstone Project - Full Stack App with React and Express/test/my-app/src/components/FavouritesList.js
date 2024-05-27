// /src/components/FavouritesList.js
import React from "react";

const FavouritesList = ({ favourites, onRemove }) => {
  return (
    <div>
      <h2>Favourites</h2>
      <div className="favourites">
        {favourites.map((favourite) => (
          <div key={favourite.collectionId} className="favourite-item">
            <img src={favourite.artworkUrl100} alt={favourite.collectionName} />
            <h3>{favourite.collectionName || favourite.trackName}</h3>
            <p>{favourite.artistName}</p>
            <p>{new Date(favourite.releaseDate).toLocaleDateString()}</p>
            <p className="media-type">
              {favourite.kind || favourite.wrapperType}
            </p>
            <button onClick={() => onRemove(favourite)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesList;
