import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1bb111e1";

  const fetchMovies = async (query = "spider") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <Header title="Movies Mixture" onSearch={fetchMovies} />
      <div class="mt-4">
        <h3 className="text-light">Nonton film apa hari ini!</h3>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
