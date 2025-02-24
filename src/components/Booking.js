import React from "react";
import { Link } from "react-router-dom";
import './Booking.css';
import movies from "./movie";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

const Booking = () => {
  console.log(movies);
  return (
    <>
      <NavBar />
      <span className='greet'>Good Morning Mr.Naval Ravikant !</span>
      <div className="movie-container">
        {movies.map((movie)=>(<MovieCard data={movie}/>))
        }
      </div>
    </>
  );
};
export default Booking;
