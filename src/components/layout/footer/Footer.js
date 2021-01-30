import React from "react";
import IconLogo from "../../icon-logos/IconLogo";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <h4>Ale Aquino &#169; {date}</h4>

      <ul className="footer-link">
        <li>
          <IconLogo
            icon={faLinkedin}
            alt="linkedin icon"
            id="linkedin"
            href="https://www.linkedin.com/in/alejandro-aquino-0a51b628/"
            size="2x"
          />
        </li>

        <li>
          <IconLogo
            icon={faGithub}
            alt="github icon"
            id="github"
            href="https://github.com/aledaquino1986"
            size="2x"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
