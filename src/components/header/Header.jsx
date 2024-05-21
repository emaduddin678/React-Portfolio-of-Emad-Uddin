import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/emad-iP.jpeg";
import HeaderSocials from "./HeaderSocials";
import {AiOutlineArrowDown} from 'react-icons/ai'

const Header = () => {
  return (
    <header className="container">
      {/* div.container */}
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1 style={{ fontWeight: "600" }}>Emad Uddin</h1>
        <h5 className="text-light">Front End Based MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down <AiOutlineArrowDown />
        </a>
      </div>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  );
};

export default Header;
