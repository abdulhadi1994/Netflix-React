import React from "react";
import Hero from "../assets/background-img.jpg";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header className="hero">

        <img src={Hero} alt="" className="header__img" />
        <div className="container">
        <div className="header__contents">
          <h1 className="header__title">Title</h1>
          <div className="header__btns">
            <button className="header__btn-1">Play</button>
            <button className="header__btn-2"><span className="header__btn-icon"><FontAwesomeIcon icon={faCircleInfo}/></span>More Info</button>
          </div>
          <p className="header__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus at
            velit dolorum praesentium iusto non perferendis molestias, et
            pariatur aspernatur..
          </p>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
