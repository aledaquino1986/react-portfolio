import React from "react";
import Seo from "./Seo";
import Image from "./Image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Index() {
  return (
    <main>
      <Seo title="Homepage" />
      <section className="intro">
        <div className="intro-text">
          <h2>Alejandro Neme</h2>
          <h3>
            Full stack <br /> web developer
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            et excepturi eligendi magni provident, ex mollitia sunt soluta a
            eveniet quo rem voluptatum minima dolore, commodi illum non
            architecto!
          </p>
          <div className="intro-social">
            <Link to="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                alt="linkedin icon"
                size="2x"
                id="linkedin"
              />
            </Link>

            <Link to="https://www.github.com">
              <FontAwesomeIcon
                icon={faGithub}
                alt="github icon"
                size="2x"
                id="github"
              />
            </Link>
          </div>
        </div>

        <Image />
      </section>
    </main>
  );
}

export default Index;
