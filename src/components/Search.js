import React, { useState } from "react";

const Search = ({ searchMovies }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default Search;
