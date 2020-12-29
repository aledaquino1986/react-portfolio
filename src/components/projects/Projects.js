import React from "react";
import Seo from "../Seo";
import techStore from "../../images/portfolio/the-tech-store.PNG";
import calculator from "../../images/portfolio/calculator.PNG";

function Projects() {
  return (
    <>
      <Seo title="Homepage" />
      <section className="projects-section">
        <div className="project tech-store">
          <h2>The tech Store - HTML/CSS</h2>
          <img src={techStore} alt="The tech store" className="project-image" />
        </div>

        <div className="project calculator">
          <h2>Calculator - Javascript</h2>
          <img src={calculator} alt="" className="project-image" />
        </div>

        <div className="project tech-store">
          <h2>The tech Store - HTML/CSS</h2>
          <img src={techStore} alt="The tech store" className="project-image" />
        </div>

        <div className="project calculator">
          <h2>Calculator - Javascript</h2>
          <img src={calculator} alt="" className="project-image" />
        </div>

        <div className="project tech-store">
          <h2>The tech Store - HTML/CSS</h2>
          <img src={techStore} alt="The tech store" className="project-image" />
        </div>

        <div className="project calculator">
          <h2>Calculator - Javascript</h2>
          <img src={calculator} alt="" className="project-image" />
        </div>

        <div className="project tech-store">
          <h2>The tech Store - HTML/CSS</h2>
          <img src={techStore} alt="The tech store" className="project-image" />
        </div>

        <div className="project calculator">
          <h2>Calculator - Javascript</h2>
          <img src={calculator} alt="" className="project-image" />
        </div>
      </section>
    </>
  );
}

export default Projects;
