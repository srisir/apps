import { app } from "./app.js";
import { DatabaseConnection } from "./Config/connection.js";
import { config } from "dotenv";
import cloudinary from "cloudinary";

if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "Config/config.env" });
}

DatabaseConnection();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Running Port ${process.env.PORT}`);
});
