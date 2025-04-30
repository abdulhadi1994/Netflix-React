import React from "react";
import MovieImg1 from "../../assets/Venom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const Movie = ({ movie }) => {

    return (
    <>
      <div className="movie">
        <figure className="movie__img-wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
          <h3 className="movie__info-title">{movie.Title}</h3>
          <button className="movie__info-btn">Find out more</button>
        </figure>
      </div>
    </>
  );
};

export default Movie;
