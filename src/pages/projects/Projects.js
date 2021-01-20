import React from "react";
import Seo from "../../components/seo/Seo";
import Project from "./Project";
import techStore from "../../images/portfolio/the-tech-store.PNG";
import calculator from "../../images/portfolio/calculator.PNG";
import rockPaperScissors from "../../images/portfolio/rock-paper-scissors.PNG";
import portfolio from "../../images/portfolio/portfolio.PNG";
import Pepsi from "../../images/portfolio/pepsi.PNG";
import imperioGamer from "../../images/portfolio/imperiogamer.PNG";
import chillhop from "../../images/portfolio/chillhop.PNG";

function Projects() {
  return (
    <>
      <Seo title="Homepage" />
      <section className="projects-section">
        <Project
          className="imperio-gamer"
          title="Imperio Gamer"
          technology="Node/Express"
          image={imperioGamer}
          altname="Imperio gamer"
          website="https://imperio-gamer.herokuapp.com/"
          githubCode="https://github.com/aledaquino1986/grupo_3_imperioGamer"
        />
        <Project
          className="portfolio"
          title="Portfolio"
          technology="React"
          image={portfolio}
          altName="Portfolio"
          website="https://aleaquino.netlify.app/"
          githubCode="https://github.com/aledaquino1986/react-portfolio"
        />

        <Project
          className="tech-store"
          title="The Tech Store"
          technology="HTML/CSS"
          image={techStore}
          altName="The Tech Store"
          website="https://aledaquino1986.github.io/landing-page/"
          githubCode="https://github.com/aledaquino1986/landing-page"
        />

        <Project
          className="music-player"
          title="Chillhop Sounds"
          technology="React"
          image={chillhop}
          altName="Chillhop"
          website="https://chillhop-sounds.netlify.app/"
          githubCode="https://github.com/aledaquino1986/music-app-vol-2"
        />

        <Project
          className="calculator"
          title="Calculator"
          technology="Javascript"
          image={calculator}
          altName="Calculator"
          website="https://aledaquino1986.github.io/calculator/"
          githubCode="https://github.com/aledaquino1986/calculator"
        />

        <Project
          className="rock-paper-scissors"
          title="Rock Paper Scissors"
          technology="HTML/CSS/JS"
          image={rockPaperScissors}
          altName="Rock Paper Scissors"
          website="https://aledaquino1986.github.io/rockpaperscissors/"
          githubCode="https://github.com/aledaquino1986/rockpaperscissors"
        />

        <Project
          className="pepsi"
          title="Pepsi"
          technology="HTML/CSS/JS"
          image={Pepsi}
          altName="Pepsi"
          website="https://aledaquino1986.github.io/pepsi-landing-page"
          githubCode="https://github.com/aledaquino1986/pepsi-landing-page"
        />
      </section>
    </>
  );
}

export default Projects;
