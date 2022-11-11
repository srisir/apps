import express from "express";
const router = express.Router();
import { allProjects, newProject, projectDetails } from "../Controller/projectController.js";

router.route("/admin/new").post(newProject);
router.route("/projects").get(allProjects);
router.route("/project/:id").get(projectDetails);
// router.route("/deletep").get(""); 

export default router;
