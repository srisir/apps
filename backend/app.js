import express from "express";
import User from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";
export const app = express();
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { middlewareError } from "./Middleware/error.js";
import Project from "./Routes/projectRoute.js";
import cors from "cors";

import path from 'path';
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //cookie se data access karne ke liye
app.use(bodyParser.urlencoded({ extended: true })); //front se backend me data access karne ke liye
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);

app.use("/api/v1", User);
app.use("/api/v1", Project);

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200, 
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../frontend/build')))
// app.use("/static", express.static(path.join(__dirname, "../frontend/build")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
})

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.use(middlewareError);
