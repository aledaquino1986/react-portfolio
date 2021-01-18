import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>
              <FontAwesomeIcon icon={faCode} className="header-icon" />
              Alejandro Aquino
            </h1>
          </Link>
        </div>

        <ul className="header-sections">
          <li>
            <NavLink exact to="/" className="link">
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink exact to="/projects" className="link">
              {" "}
              Projects
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
