import React from 'react';
import '../styles/Search.css';

function Search() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Rechercher..." />
      <button className="search-button">Rechercher</button>
    </div>
  );
}

export default Search;
