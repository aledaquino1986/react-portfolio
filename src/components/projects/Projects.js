import React from "react";
import Seo from "../seo/Seo";
import Project from "./Project";
import techStore from "../../images/portfolio/the-tech-store.PNG";
import calculator from "../../images/portfolio/calculator.PNG";
import rockPaperScissors from "../../images/portfolio/rock-paper-scissors.PNG";
import portfolio from "../../images/portfolio/portfolio.PNG";
import Pepsi from "../../images/portfolio/pepsi.PNG";

function Projects() {
  return (
    <>
      <Seo title="Homepage" />
      <section className="projects-section">
        <Project
          className="tech-store"
          title="The Tech Store"
          technology="HTML/CSS"
          image={techStore}
          altName="The Tech Store"
          href="https://aledaquino1986.github.io/landing-page/"
        />

        <Project
          className="calculator"
          title="Calculator"
          technology="Javascript"
          image={calculator}
          altName="Calculator"
          href="https://aledaquino1986.github.io/calculator/"
        />

        <Project
          className="rock-paper-scissors"
          title="Rock Paper Scissors"
          technology="HTML/CSS/JS"
          image={rockPaperScissors}
          altName="Rock Paper Scissors"
          href="https://aledaquino1986.github.io/rockpaperscissors/"
        />

        <Project
          className="portfolio"
          title="Portfolio"
          technology="React"
          image={portfolio}
          altName="Portfolio"
        />

        <Project
          className="pepsi"
          title="Pepsi"
          technology="HTML/CSS/JS"
          image={Pepsi}
          altName="Pepsi"
          href="https://aledaquino1986.github.io/pepsi-landing-page"
        />
      </section>
    </>
  );
}

export default Projects;
