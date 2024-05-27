import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import FavouritesList from "./components/FavouritesList";
import axios from "axios";
import "./App.css"; // Import the CSS file

// App Component: Main component of the application
function App() {
  // State variables to manage search results, favourites, and token
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [token, setToken] = useState("");

  // Effect hook to fetch the token when the component mounts
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/token", {})
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  // Function to handle search requests
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
        // Filter results to exclude favourites
        const filteredResults = response.data.results.filter(
          (result) =>
            !favourites.some((fav) => fav.collectionId === result.collectionId)
        );
        setResults(filteredResults);
      })
      .catch((error) => console.error(error));
  };

  // Function to toggle favourites
  const handleFavouriteToggle = (item) => {
    const isFavourited = favourites.some(
      (fav) => fav.collectionId === item.collectionId
    );

    if (isFavourited) {
      // Remove from favourites
      setFavourites((prev) =>
        prev.filter((fav) => fav.collectionId !== item.collectionId)
      );
    } else {
      // Add to favourites
      setFavourites((prev) => [...prev, item]);
    }

    // Update results list to reflect favourite status
    setResults((prev) =>
      prev.map((result) =>
        result.collectionId === item.collectionId
          ? { ...result, isFavourite: !isFavourited }
          : result
      )
    );
  };

  // Function to clear search results
  const handleClearResults = () => {
    setResults([]);
  };

  // Render the main UI
  return (
    <div className="container">
      {/* Display list of favourites */}
      <FavouritesList
        favourites={favourites}
        onRemove={handleFavouriteToggle}
      />
      {/* Display search bar */}
      <SearchBar onSearch={handleSearch} />
      {/* Button to clear search results */}
      <button className="clear-button" onClick={handleClearResults}>
        Clear Results
      </button>
      {/* Display search results */}
      <ResultsList
        results={results}
        onFavouriteToggle={handleFavouriteToggle}
      />
    </div>
  );
}

export default App;
