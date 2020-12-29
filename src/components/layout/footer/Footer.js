import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <h4>Ale Neme &#169; {date}</h4>

      <ul className="footer-link">
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer-icon"
              id="linkedin"
            />
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faGithub}
              className="footer-icon"
              id="github"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
