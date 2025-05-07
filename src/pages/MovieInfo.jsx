import MovieImg1 from "../assets/Venom.jpg";
import MovieImg2 from "../assets/Guardians of the Galaxy Vol 2.jpg";
import MovieImg3 from "../assets/Mission-Impossible.jpg";
import MovieImg4 from "../assets/Spider-Man.jpg";
import MovieImg5 from "../assets/Taken.jpg";
import MovieImg6 from "../assets/The Fast and the Furious.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import MovieInfoSkeleton from "../components/ui/MovieInfoSkeleton.jsx";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMoviesInfo() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=13d20677&i=${id}&plot=full`
        );

        if (data.Response === "True") {
          setMovie(data);
        } else {
          console.error("Movie not found");
        }
      } catch (error) {
        console.error(error.message === "Network Error");
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesInfo();
  }, [id]);

  return (
    <main className="movies__main">
      <div className="container moviesinfo__container">
        {loading ? (
          <MovieInfoSkeleton />
        ) : (
          <>
            <div className="movieinfo">
              <figure className="movieinfo-img-wrapper">
                <img src={movie.Poster} alt="" className="movieinfo-img" />
              </figure>
              <div className="movieinfo-text">
                <h1 className="moiveinfo-text-title">{movie.Title}</h1>
                <div className="movieinfo-info">
                  <p className="movieinfo-info-span">
                    <span>
                      <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    Release Date: <span>{movie.Released}</span>
                  </p>
                  <p className="movieinfo-info-span">
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    Duration: <span>{movie.Runtime}</span>
                  </p>
                  <p className="movieinfo-info-span">
                    <span>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </span>
                    Rating: <span>{movie.imdbRating}</span>
                  </p>
                </div>
                <h3 className="moiveinfo-para-title">Overview:</h3>
                <p className="movieinfo-info-para">{movie.Plot}</p>
                <button className="movieinfo-btn no-cursor">Watch</button>
              </div>
            </div>

            <div className="movieinfo-recommend">
              <h1>Recommended</h1>
              <div className="movieinfo-recommend-list">
                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg1} alt="" className="movie__img" />
                    <h3 className="movie__info-title">Venom</h3>
                    <Link to="/moviepage/tt1270797">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>

                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg2} alt="" className="movie__img" />
                    <h3 className="movie__info-title">
                      Guardians of the Galaxy Vol 2
                    </h3>
                    <Link to="/moviepage/tt3896198">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>

                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg3} alt="" className="movie__img" />
                    <h3 className="movie__info-title">Mission Impossible</h3>
                    <Link to="/moviepage/tt0117060">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>

                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg4} alt="" className="movie__img" />
                    <h3 className="movie__info-title">Spider-Man</h3>
                    <Link to="/moviepage/tt0145487">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>

                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg5} alt="" className="movie__img" />
                    <h3 className="movie__info-title">Taken</h3>
                    <Link to="/moviepage/tt0936501">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>

                <div className="movie">
                  <figure className="movie__img-wrapper">
                    <img src={MovieImg6} alt="" className="movie__img" />
                    <h3 className="movie__info-title">
                      The Fast and the Furious
                    </h3>
                    <Link to="/moviepage/tt0232500">
                      <button className="movie__info-btn">Find out more</button>
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default MovieInfo;
