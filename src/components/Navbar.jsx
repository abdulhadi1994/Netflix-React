import React, { useEffect, useState } from "react";
import NavLogo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
            {["Home", "TV Shows", "Movies", "Membership", "Settings"]
            .map((item) => (<li key={item} className="nav__menu-link">{item}</li>)
            )}
          </ul>
        </div>

        <div className="navbar-right">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__search" />
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
