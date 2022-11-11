import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_projects } from "../Redux/Actions/projectAction";
import ProjectCard from "./ProjectCard";
import img2 from "../Imgs/u1.webp";
import Loading from "./Loading";
import Banner from "./Banner";

const Projects = () => {
  const dispatch = useDispatch();
  const { loading, projects } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(all_projects());
  }, [dispatch]);
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="main">
          <div>
            <Banner img={img2} />
          </div>
          <div className="srisir">
            <h2>Projects</h2>
            <div className="projects">
              {projects &&
                projects.map((project) => (
                  <div key={project._id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
