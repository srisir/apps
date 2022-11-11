import React from "react";
import SidePannel from "./SidePannel";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { craeteProjects } from "../../Redux/Actions/projectAction";

const NewProject = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.project);
  const [project, useProject] = useState({
    name: "",
    details: "",
    website: "",
    language: "",
    author: "",
    category: "",
  });
  const { name, details, website, language, author, category } = project;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const p_data = new FormData();
    p_data.set("name", name);
    p_data.set("details", details);
    p_data.set("website", website);
    p_data.set("category", category);
    p_data.set("language", language);
    p_data.set("author", author);

    // images.forEach((image) => {
    //   p_data.append("images", image);
    // });
    dispatch(craeteProjects(p_data));
  };

  const P_craete_handler = (e) => {
    useProject({ ...project, [e.target.name]: e.target.value });
    // if (e.target.name === "avatar") {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setAvatarPreview(reader.result);
    //       setAvatar(reader.result);
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // } else {
    // }
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      // dispatch(clearErrors());
    }
    if (success === true) {
      window.alert("Project Created");
    }
  }, [error, dispatch, success]);
  return (
    <div className="main">
      <SidePannel/>
      <div className="login">
        <div className="loginForm">
          <form onSubmit={formSubmitHandler}>
            <h1>Create New Project</h1>
            <input
              type="text"
              placeholder="Project Name"
              onChange={P_craete_handler}
              value={name}
              name="name"
            />
            <input
              type="text"
              placeholder="Project details"
              onChange={P_craete_handler}
              value={details}
              name="details"
            />
            <input
              type="text"
              placeholder="Project website"
              onChange={P_craete_handler}
              value={website}
              name="website"
            />
            <input
              type="text"
              placeholder="Project language"
              onChange={P_craete_handler}
              value={language}
              name="language"
            />
            <input
              type="text"
              placeholder="Project author"
              onChange={P_craete_handler}
              value={author}
              name="author"
            />
            <input
              type="text"
              placeholder="Project Category"
              onChange={P_craete_handler}
              value={category}
              name="category"
            />
            <input
              type="submit"
              onChange={P_craete_handler}
              value="Create"
              className="btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
