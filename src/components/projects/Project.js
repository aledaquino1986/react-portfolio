import React from "react";

function project({ className, image, altName, title, technology, href }) {
  return (
    <div className={`project ${className}`}>
      <h3>
        {title} - {technology}
      </h3>
      <a href={href} rel="noreferrer" target="_blank">
        <img src={image} alt={altName} className="project-image" />
      </a>
    </div>
  );
}

export default project;
