import React, { useEffect, useState } from "react";
import NavLogo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFilm, faGear, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <img src={NavLogo} href="/" className="nav__logo" />
          <ul className="nav__menu-links">
            <li className="nav__menu-link"><span><FontAwesomeIcon icon={faHouse}/></span> Home </li>
            <Link to="/moviepage" className="nav__menu-link">
           <li ><span><FontAwesomeIcon icon={faFilm} /></span>Movies/TV Series</li>
            </Link>            
            <li className="nav__menu-link no-cursor"><span><FontAwesomeIcon icon={faUser} /></span>Membership </li>
            <li className="nav__menu-link no-cursor"><span><FontAwesomeIcon icon={faGear} /></span>Settings  </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="nav__profile">
            <button className="circle">
              <span className="circle__inital">A</span>
            </button>
            <FontAwesomeIcon icon={faAngleDown} className="nav__down" />
            <div className="dropdown">
              <p className="dropdown__text">Sign out of Netflix</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
