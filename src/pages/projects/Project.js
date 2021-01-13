import React, { useState } from "react";
import Button from "./Button";

function Project({
  className,
  image,
  altName,
  title,
  technology,
  website,
  githubCode
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleImageMouseOver = () => {
    setIsMouseOver(true);
  };
  return (
    <div
      className={`project ${className}`}

      //
    >
      <h3>
        {title} - {technology}
      </h3>

      <div
        className="container"
        onMouseEnter={handleImageMouseOver}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {/* <a href={href} rel="noreferrer" target="_blank">
          
        </a> */}
        <img src={image} alt={altName} className="project-image" />
        {isMouseOver ? (
          <Button website={website} githubCode={githubCode} />
        ) : null}
      </div>
    </div>
  );
}

export default Project;
