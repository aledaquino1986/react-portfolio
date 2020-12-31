import React from "react";

function project({ className, image, altName, title, technology }) {
  return (
    <div className={`project ${className}`}>
      <h2>
        {title} - {technology}
      </h2>
      <img src={image} alt={altName} className="project-image" />
    </div>
  );
}

export default project;
