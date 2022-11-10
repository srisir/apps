import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Link to={`/project/${project._id}`}>
        <div className="p_card">
          <p>
            <b>Name: </b> {project.name}
          </p>
          <p className="p_details">
            <b>Id: </b> {project._id}
          </p>
          <p className="p_details">
            <b>Category: </b> {project.category}
          </p>
          <p className="p_details">
            <b>Url: </b> {project.website}
          </p>
          <p className="p_details">
            <b>Author: </b> {project.author}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
