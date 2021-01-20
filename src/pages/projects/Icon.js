import React, { useState } from "react";
import IconLogo from "../../components/icon-logos/IconLogo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faCircle } from "@fortawesome/free-solid-svg-icons";

function Button({ website, githubCode }) {
  const [isDesktopMouseOver, setIsDesktopMouseOver] = useState(false);
  return (
    <div className="view-project-btns">
      <IconLogo
        icon={faGithub}
        alt="Link to github code"
        href={githubCode}
        size="3x"
        className="button-icon github"
      >
        View Code
      </IconLogo>

      <span className="fa-layers fa-fw fa-5x">
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
      </span>
    </div>
  );
}

export default Button;
