import React, { useState } from "react";
import IconLogo from "../../components/icon-logos/IconLogo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faCircle } from "@fortawesome/free-solid-svg-icons";

function Button({ website, githubCode, description = "" }) {
  const [isDesktopMouseOver, setIsDesktopMouseOver] = useState(false);
  return (
    <div className="project-icons-container">
      <div className="view-project-btns">
        <div className="project-description">
          <span className="project-description-span">
            {" "}
            <p>
              <mark> {description}</mark>
            </p>
          </span>
        </div>

        <div className="logos-containers">
          <IconLogo
            icon={faGithub}
            alt="Link to github code"
            href={githubCode}
            size="3x"
            className="button-icon github"
          >
            View Code
          </IconLogo>

          <div className="fa-layers fa-fw fa-5x">
            <IconLogo
              icon={faDesktop}
              alt="Link to website"
              size="2x"
              className="button-icon desktop fa-stack-1x"
              href={website}
              onMouseEnter={() => setIsDesktopMouseOver(true)}
              onMouseLeave={() => setIsDesktopMouseOver(false)}
            />

            <IconLogo
              icon={faCircle}
              style={isDesktopMouseOver ? { color: "black" } : null}
              size="3x"
              className="button-icon desktop fa-stack-3x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
