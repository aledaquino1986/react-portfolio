import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconLogo({ icon, alt, size, id, href }) {
  return (
    <a href={href}>
      <FontAwesomeIcon
        icon={icon}
        alt={alt}
        size={!size ? "1x" : size}
        id={id}
      />
    </a>
  );
}

export default IconLogo;
