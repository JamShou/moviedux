// MovieCard.js
import React from "react";
import ExpandedCard from "../ExpandedCard/ExpandedCard";
import ".//MovieCard.css"

const getGenreName = (genreIds, genres) => {
  if (genreIds.length > 0) {
    const genre = genres.find((genre) => genre.id === genreIds[0]);
    return genre ? genre.name : "Unknown";
  }
  return "Unknown";
};

const getRatingClass = (rating) => {
  if(rating >= 8){
    return 'rating-good';
  }
  else if (rating>=6){
    return 'rating-ok';
  }
  else{
    return 'rating-bad';
  }
};

export default function MovieCard({ movie, genres, isSelected, onClick }) {
  return (
    <div
      className={`movie-card ${isSelected ? "expanded" : ""}`}
      onClick={() => onClick(movie)} // Handle click to expand the card
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">
          {getGenreName(movie.genre_ids, genres) || "Genre Not Found"}
        </p>
        <p className={`movie-card-rating ${getRatingClass(movie.vote_average)}`}>
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </p>
      </div>
      {isSelected && <ExpandedCard movie={movie} />}{" "}
      {/* Render ExpandedCard here */}
    </div>
  );
}
