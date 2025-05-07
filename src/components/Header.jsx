import React, { useContext, useState } from "react";
import Hero from "../assets/background-img.jpg";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { fetchMovies } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      fetchMovies(inputValue);
      navigate("moviepage");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="hero">
        <img src={Hero} alt="" className="header__img" />

        <div className="home-text">
          <h1 className="home-text__heading">
            Unlimited films, TV programmes and more
          </h1>
          <h3 className="home-text__subheading">
            Ready to watch? Search for a movie.
          </h3>
          <div className="home__background-search">
            <div className="home__input--wrapper">
              <input
                type="text"
                className="home__input"
                id="searchBar"
                placeholder="Find a movie"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="home__input-search"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
