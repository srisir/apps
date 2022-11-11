import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // image:{ type: String, required: true },
  details: { type: String, required: true },
  category: { type: String, required: true },
  website: { type: String, required: true }, 
  language: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Project = mongoose.model('Project', projectSchema);
 