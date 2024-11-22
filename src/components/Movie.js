import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          className="card-img-top"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">Year: {movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
