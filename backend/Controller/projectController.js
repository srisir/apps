import { Project } from "../Schema/projectSchema.js";
import cloudinary from "cloudinary";

export const newProject = async (req, res) => {
  try {
    const { name, details, website, language, author, category } = req.body;
    if (!name || !details || !website || !author || !language || !category) {
      res.state(400).json({
        success: false,
        message: "Plz Fill All Field",
      });
    }
    const project = await Project.create({
      name,
      details,
      website,
      language,
      author,
      category,
    });
    return res.status(2001).json({
      success: true,
      message: "Project Created",
      project,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
 
export const allProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Get Product Details
export const projectDetails = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(400).json({
      success: false,
      message: "No Product",
    });
  }
  res.status(200).json({
    success: true,
    project,
  });
};

//delete Product................
export const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(400).json({
      success: false,
      message: "No Project",
    });
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < project.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(project.images[i].public_id);
  // }

  await project.remove();
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};

export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id);
  if (!project) {
    return res.status(400).json({
      success: false,
      message: "No Project",
    });
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < project.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(project.images[i].public_id);
  // }

  await project.remove();
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};
