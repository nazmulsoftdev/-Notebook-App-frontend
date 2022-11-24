import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";

function Header() {
  return (
    <div className="Header-container">
      <div className="header-content">
        <Link to="/">
          <GiNotebook color="#20bf6b" size={30} className="Fox-logo" />
        </Link>
        <Link to="/singup">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
