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
import digitalWatch from "../../images/portfolio/digitalwatch.PNG";
import hackernews from "../../images/portfolio/hackernews.PNG";
import cv from "../../images/portfolio/cv.PNG";

function Projects() {
  return (
    <>
      <Seo title="Homepage" />
      <section className="projects-section">
        <Project
          className="hackernews"
          title="Soft Hacker News clone"
          technology="React - classes"
          image={hackernews}
          altName="Hacker news"
          website="https://hackernews-project.netlify.app/"
          githubCode="https://github.com/aledaquino1986/hacker-news"
          description="(Soft) Hacker news clone"
        />

        <Project
          className="CV"
          title="CV"
          technology="HTML/CSS/React"
          image={cv}
          altName="Resume"
          website="https://ale-resume.netlify.app/"
          githubCode="https://github.com/aledaquino1986/react-cv"
          description="Resume created with first with plain HTML and CSS and then refactored as a React project"
        />

        <Project
          className="music-player"
          title="Chillhop Sounds"
          technology="React - Hooks"
          image={chillhop}
          altName="Chillhop"
          website="https://chillhop-sounds.netlify.app/"
          githubCode="https://github.com/aledaquino1986/music-app-vol-2"
          description="Lofi Hip hop player created with React (hooks)."
        />

        <Project
          className="imperio-gamer"
          title="Imperio Gamer Ecommerce"
          technology="Node/Express"
          image={imperioGamer}
          altname="Imperio gamer"
          website="https://imperio-gamer.herokuapp.com/"
          githubCode="https://github.com/aledaquino1986/grupo_3_imperioGamer"
          description="Ecommerce page created with NodeJs, express, EJS, MYSQL, using the MVC pattern."
        />

        <Project
          className="portfolio"
          title="Portfolio"
          technology="React - Hooks"
          image={portfolio}
          altName="Portfolio"
          website="https://aleaquino.netlify.app/"
          githubCode="https://github.com/aledaquino1986/react-portfolio"
          description="This site! Created with React (hooks, router) and SASS for styles."
        />

        <Project
          className="tech-store"
          title="The Tech Store"
          technology="HTML/CSS"
          image={techStore}
          altName="The Tech Store"
          website="https://aledaquino1986.github.io/landing-page/"
          githubCode="https://github.com/aledaquino1986/landing-page"
          description="Videogame store landing page created with HTML and CSS"
        />

        <Project
          className="calculator"
          title="Calculator"
          technology="Javascript"
          image={calculator}
          altName="Calculator"
          website="https://aledaquino1986.github.io/calculator/"
          githubCode="https://github.com/aledaquino1986/calculator"
          description="HTML, CSS and Javascript calculator."
        />

        <Project
          className="digital-watch"
          title="Digital watch"
          technology="HTML/CSS/JS"
          image={digitalWatch}
          altName="Digital watch preview"
          website="https://aledaquino1986.github.io/digital-watch/"
          githubCode="https://github.com/aledaquino1986/digital-watch"
          description="Digital watch created with HTML, CSS and Vanilla CSS"
        />

        <Project
          className="pepsi"
          title="Pepsi dynamic landing page"
          technology="HTML/CSS/JS"
          image={Pepsi}
          altName="Pepsi"
          website="https://aledaquino1986.github.io/pepsi-landing-page"
          githubCode="https://github.com/aledaquino1986/pepsi-landing-page"
          description="Mobile Landing Page created with HTML, CSS, Vanilla JS"
        />
      </section>
    </>
  );
}

export default Projects;
