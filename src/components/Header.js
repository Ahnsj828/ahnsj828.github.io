import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
import DesktopRT from "../assets/images/Background_files/DesktopRT.png";

const Header = () => {
  return (
    <header>
      <article className="bg-top">
        <div className="bg-LT">
          <img src={DesktopLT} alt="bg-LT" />
        </div>
        <div className="bg-RT">
          <img src={DesktopRT} alt="bg-RT" />
        </div>
      </article>
      <div className="header">
        <Link to="/">
          <h1 className="logo">
            Ahn
            <span className="logo-back">.</span>
          </h1>
        </Link>
        <ul className="menu">
          <li className="menu-on menu-off">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="menu-on menu-off">
            <Link to="/introduce">
              <span>Introduce</span>
            </Link>
          </li>
          <li className="menu-on menu-off">
            <Link to="/project">
              <span>Project</span>
            </Link>
          </li>
          <li className="menu-on menu-off">
            <Link to="/example">
              <span>Example</span>
            </Link>
          </li>
          <li className="menu-on menu-off">
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
