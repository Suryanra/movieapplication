import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Booking.css';
import movies from "./movie";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

const Booking = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <NavBar setSearchQuery={setSearchQuery} />
      <span className='greet'>Good Morning Mr. Naval Ravikant!</span>
      <div className="movie-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieCard key={movie.id} data={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
};

export default Booking;
