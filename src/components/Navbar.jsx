import React, { useEffect, useState } from "react";
import NavLogo from "../assets/logo.png";
import LoginLogo from "../assets/login-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faFilm,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
  }, []);

  function logOut() {
    signOut(auth)
    .then(() => {
      navigate("/login");
    })
    .catch((error) => {
      console.log("Sign-out error:", error);
    });
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/">
            <img src={NavLogo} href="/" className="nav__logo" />
          </Link>
          <ul className="nav__menu-links">
            <Link to="/" className="nav__menu-link">
              <li>
                <span>
                  <FontAwesomeIcon icon={faHouse} />
                </span>{" "}
                Home{" "}
              </li>
            </Link>
            <Link to="/moviepage" className="nav__menu-link">
              <li>
                <span>
                  <FontAwesomeIcon icon={faFilm} />
                </span>
                Movies/TV Series
              </li>
            </Link>
            <li className="nav__menu-link no-cursor">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Membership{" "}
            </li>
            <li className="nav__menu-link no-cursor">
              <span>
                <FontAwesomeIcon icon={faGear} />
              </span>
              Settings{" "}
            </li>
          </ul>

          <div className="nav-sidebar">
            <div className="sidebar-link">
              <span>Browse</span>
              <FontAwesomeIcon icon={faAngleDown} className="nav__down" />
            </div>
            <div className="sidebar-dropdown">
              <Link to="/">
                <p className="sidebar-dropdown-text">
                  <span>Home</span>
                </p>
              </Link>

              <Link to="/moviepage">
                <p className="sidebar-dropdown-text">
                  <span>Movies/TV Series</span>
                </p>
              </Link>

              <p className="sidebar-dropdown-text no-cursor">
                <span>Membership</span>
              </p>
              <p className="sidebar-dropdown-text no-cursor">
                <span>Settings</span>
              </p>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <div className="nav__profile">
            <img src={LoginLogo} alt="" className="login-logo" />
            
            <FontAwesomeIcon icon={faAngleDown} className="nav__down" />
            <div className="dropdown">
              <p className="dropdown__text" onClick={() => logOut()}>
                Sign out of Netflix
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
