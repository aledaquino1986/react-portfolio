import React, { useState } from "react";
import Icon from "./Icon";

function Project({
  className,
  image,
  altName,
  title,
  technology,
  website,
  githubCode,
  description
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleImageMouseOver = () => {
    setIsMouseOver(true);
  };
  return (
    <div className={`project ${className}`}>
      <a href={website}>
        <h3>
          {title} - {technology}
        </h3>
      </a>
      <div
        className="container"
        onMouseEnter={handleImageMouseOver}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img
          src={image}
          alt={altName}
          className="project-image"
          style={isMouseOver ? { filter: "grayscale(1) blur(3px)" } : null}
        />

        {isMouseOver ? (
          <>
            <Icon
              website={website}
              githubCode={githubCode}
              description={description}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
