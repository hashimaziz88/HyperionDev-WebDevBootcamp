import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import FavouritesList from "./components/FavouritesList";
import axios from "axios";

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
        setResults(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const handleFavouriteToggle = (item) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.collectionId === item.collectionId)
        ? prev.filter((fav) => fav.collectionId !== item.collectionId)
        : [...prev, item]
    );
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ResultsList
        results={results}
        onFavouriteToggle={handleFavouriteToggle}
      />
      <FavouritesList
        favourites={favourites}
        onRemove={handleFavouriteToggle}
      />
    </div>
  );
}

export default App;
