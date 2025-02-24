import React from "react";
import './MovieCard.css'
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
      const url=`./../${props.data.imageUrl}`;
      const navigate=useNavigate();
  return (
    <div className="movie-card" onClick={()=>navigate(`/movie/selection/${props.data.id}`)}>
      <div className="poster-container">
        <img className="movie-poster" src={url}></img>
      </div>
      <div className="title-container"> {`${props.data.name} (${props.data.releaseDate})`}</div>
    </div>
  );
};

export default MovieCard;
