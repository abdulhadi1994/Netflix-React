import React from "react";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {

    return (
    <>
      <div className="movie">
        <figure className="movie__img-wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
          <h3 className="movie__info-title">{movie.Title}</h3>
         <Link to={`/moviepage/${movie.imdbID}`}>
         <button className="movie__info-btn">Find out more</button>
         </Link> 
        </figure>
      </div>
    </>
  );
};

export default Movie;
