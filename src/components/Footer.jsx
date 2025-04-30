import React from "react";
import FooterLogo from "../assets/netflix-logo-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
  <footer>
        <div className="footer__row">

        <a href="#" className="footer__img__wrapper">
          <img src={FooterLogo} alt="" className="footer__img" />
        </a>
        <div className="social">
          <a href="#" className="footer__social no-cursor">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="footer__social no-cursor">
           <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="footer__social no-cursor">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        </div>
  </footer>
    
  );
};

export default Footer;
