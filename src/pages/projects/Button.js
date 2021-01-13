import React from "react";
import IconLogo from "../../components/icon-logos/IconLogo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function Button({ website, githubCode }) {
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
      <IconLogo
        icon={faDesktop}
        alt="Link to website"
        size="3x"
        className="button-icon desktop"
        href={website}
      >
        View Page
      </IconLogo>
    </div>
  );
}

export default Button;
