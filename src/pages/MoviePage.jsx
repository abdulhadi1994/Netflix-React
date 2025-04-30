import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Movie from "../components/ui/Movie";
import searchImg from "../assets/search-img.svg";

const MoviePage = () => {
  const [movies1, setMovies1] = useState([]);
  const [input, setInput] = useState("");

  async function fetchMovies(value) {
    try {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=13d20677&s=${value}`
      );

      if (data.Response === "True" && data.Search) {
        setMovies1(data.Search);
      } else {
        setMovies1([]);
      }
    } catch (error) {
      console.error("Failed to fetch movies", error);
      setMovies1([]);
    }
  }

  const handleChange = (value) => {
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setMovies1([]);
      return;
    }

    fetchMovies(input);
  };

  return (
    <>
      <section className="movies1">
        <div className="container">
          <div className="moviespage-movies">
            <form
              onSubmit={handleSubmit}
              action=""
              className="moviepage-search"
            >
              <div className="moviepage-search-input">
                <input
                  type="text"
                  placeholder="Search for a movie/series"
                  value={input}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>

              <div className="moviepage-search-btn">
                <button type="submit" className="btn">
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  Search
                </button>
              </div>
            </form>

            <div className="moviespage__movies">
              {movies1.length > 0 ? (
                movies1
                  .slice(0, 6)
                  .map((movie) => <Movie key={movie.imdbID} movie={movie} />)
              ) : (
                <div className="search-img-container">
                  <img
                    src={searchImg}
                    alt="Search prompt"
                    className="search-img"
                  />
                  <h3 className="search-img-text">Waiting for your search...</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePage;
