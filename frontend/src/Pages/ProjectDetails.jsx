import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { projectsDetails } from "../Redux/Actions/projectAction";
import img3 from "../Imgs/24.jpg";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(projectsDetails(id));
  }, [dispatch, id]);
  return (
    <div className="main">
      <div className="p_details">
        <div>
          <img src={img3} alt={project.name} />
        </div>
        <div>
          <ul>
            <li>
              <b>Name:</b> {project.name}
            </li>
            <li>
              <b>Descriptions:</b> {project.details}
            </li>
            <li>
              <b>URL:</b> {project.website}
            </li>
            <li>
              <b>Used Languages:</b> {project.language}
            </li>
            <li>
              <b>Author:</b> {project.author}
            </li>
            <li>
              <b>Date Of Creation:</b> {project.createdAt}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
