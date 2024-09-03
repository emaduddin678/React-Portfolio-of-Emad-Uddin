import React from "react";
import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer_logo">
        Go To
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com">
          <FiFacebook />
        </a>
        <a href="https://www.linkedin.com/in/emad-uddin-60a497204">
          <BsLinkedin />
        </a>
        <a href="https://www.twitter.com">
          <FiTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Emad Uddin {currentYear}</small>
      </div>
    </footer>
  );
};

export default Footer;
