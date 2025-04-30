import React from "react";
import Hero from "../assets/background-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <section className="hero">

        <img src={Hero} alt="" className="header__img" />
        <div className="container">
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
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="movie__search"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
