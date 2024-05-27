import React from 'react';

const FavouritesList = ({ favourites, onRemove }) => {
    return (
        <div>
            <h2>Favourites</h2>
            {favourites.map(favourite => (
                <div key={favourite.collectionId}>
                    <img src={favourite.artworkUrl100} alt={favourite.collectionName} />
                    <h3>{favourite.collectionName}</h3>
                    <button onClick={() => onRemove(favourite)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default FavouritesList;
