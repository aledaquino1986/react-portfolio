import React from "react";
import Seo from "./seo/Seo";
import Image from "./Image";
import { Link } from "react-router-dom";

function Index() {
  return (
    <main>
      <Seo title="Homepage" />
      <section className="intro">
        <div className="intro-text">
          <span className="salutation">
            Hi, <span className="i-am"> I'm</span>{" "}
          </span>
          <h2>
            Alejandro <span className="surname">Neme</span>
          </h2>
          <h3>
            {" "}
            <span className="stack">Full-stack </span> web developer
          </h3>
          <div className="skills">
            <p>My preferred technologies are: </p>
            <p>
              Front-end:{" "}
              <span className="techs">HTML, CSS, Javascript, React</span>
            </p>
            <p>
              Back-end: <span className="techs">Node, Express</span>
            </p>
          </div>

          <Link to="/projects" className="link active see-more">
            See my projects
          </Link>
        </div>

        <Image />
      </section>
    </main>
  );
}

export default Index;
