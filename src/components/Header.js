import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <article className="bg-top"></article>
      <div className="header">
        <Link to="/">
          <h1 className="logo">
            Ahn
            <span className="logo-back">.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
