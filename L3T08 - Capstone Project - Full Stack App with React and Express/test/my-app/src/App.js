import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import FavouritesList from "./components/FavouritesList";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Fetch the token when the component mounts
    axios
      .post("http://localhost:5000/api/token", {})
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  const handleSearch = (term, mediaType) => {
    if (!token) {
      console.error("No token available");
      return;
    }

    axios
      .get("http://localhost:5000/api/search", {
        headers: { Authorization: `Bearer ${token}` },
        params: { term, media: mediaType },
      })
      .then((response) => {
        const filteredResults = response.data.results.filter(
          (result) =>
            !favourites.some((fav) => fav.collectionId === result.collectionId)
        );
        setResults(filteredResults);
      })
      .catch((error) => console.error(error));
  };

  const handleFavouriteToggle = (item) => {
    const isFavourited = favourites.some(
      (fav) => fav.collectionId === item.collectionId
    );

    if (isFavourited) {
      setFavourites((prev) =>
        prev.filter((fav) => fav.collectionId !== item.collectionId)
      );
    } else {
      setFavourites((prev) => [...prev, item]);
    }

    setResults((prev) =>
      prev.map((result) =>
        result.collectionId === item.collectionId
          ? { ...result, isFavourite: !isFavourited }
          : result
      )
    );
  };

  const handleClearResults = () => {
    setResults([]);
  };

  return (
    <div className="container">
      <FavouritesList
        favourites={favourites}
        onRemove={handleFavouriteToggle}
      />
      <SearchBar onSearch={handleSearch} />
      <button className="clear-button" onClick={handleClearResults}>
        Clear Results
      </button>
      <ResultsList
        results={results}
        onFavouriteToggle={handleFavouriteToggle}
      />
    </div>
  );
}

export default App;
