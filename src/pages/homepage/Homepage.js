import React from "react";
import Seo from "../../components/seo/Seo";
import Image from "../../components/Image";
import { Link } from "react-router-dom";

function Index() {
  return (
    <main>
      <Seo title="Homepage" />
      <section className="intro">
        <div className="intro-text">
          <span className="salutation">
            Hi, <span className="i-am salutation"> I'm</span>{" "}
          </span>
          <h2 className="name-title">
            Alejandro <span className="surname">Aquino</span>
          </h2>
          <h3>
            {" "}
            <span className="stack">Full-stack </span>{" "}
            <span className="profession">web developer</span>
          </h3>
          <div className="skills">
            <p>
              Front-end:{" "}
              <span className="techs">HTML, CSS, Javascript, React</span>
            </p>
            <p>
              Back-end: <span className="techs">Node, Express, MySQL</span>
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
