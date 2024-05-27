import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const [mediaType, setMediaType] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term, mediaType);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search..."
            />
            <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="podcast">Podcast</option>
                <option value="music">Music</option>
                <option value="audiobook">Audiobook</option>
                <option value="shortFilm">Short Film</option>
                <option value="tvShow">TV Show</option>
                <option value="software">Software</option>
                <option value="ebook">eBook</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
