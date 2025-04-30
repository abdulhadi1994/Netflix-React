import React from "react";
import MovieImg1 from "../assets/Venom.jpg";
import MovieImg2 from "../assets/Guardians of the Galaxy Vol 2.jpg";
import MovieImg3 from "../assets/Mission-Impossible.jpg";
import MovieImg4 from "../assets/Spider-Man.jpg";
import MovieImg5 from "../assets/Taken.jpg";
import MovieImg6 from "../assets/The Fast and the Furious.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

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

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img-wrapper">
                  <img src={MovieImg2} alt="" className="movie__img" />
                  <h3 className="movie__info-title">Guardians of the Galaxy Vol 2</h3>

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img-wrapper">
                  <img src={MovieImg3} alt="" className="movie__img" />
                  <h3 className="movie__info-title">Mission Impossible</h3>

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img-wrapper">
                  <img src={MovieImg4} alt="" className="movie__img" />
                  <h3 className="movie__info-title">Spider-Man</h3>

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img-wrapper">
                  <img src={MovieImg5} alt="" className="movie__img" />
                  <h3 className="movie__info-title">Taken</h3>

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img-wrapper">
                  <img src={MovieImg6} alt="" className="movie__img" />
                  <h3 className="movie__info-title">The Fast and the Furious</h3>

                  <div className="movie__info-list">
                    <div className="movie__info movie__info1">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <p className="movie__info--text">136m</p>
                    </div>

                    <div className="movie__info movie__info2">
                      <span className="movie__info--icon">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <p className="movie__info--text">4.5</p>
                    </div>
                  </div>
                  <button className="movie__info-btn">Find out more</button>
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
