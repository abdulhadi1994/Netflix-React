import React, { useContext } from "react";
import MovieImg1 from "../assets/Venom.jpg";
import MovieImg2 from "../assets/Guardians of the Galaxy Vol 2.jpg";
import MovieImg3 from "../assets/Mission-Impossible.jpg";
import MovieImg4 from "../assets/Spider-Man.jpg";
import MovieImg5 from "../assets/Taken.jpg";
import MovieImg6 from "../assets/The Fast and the Furious.jpg";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <div className="trending__content">
            <div className="movies">
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
        </div>
      </section>
    </>
  );
};

export default Trending;
