import { Router } from "express";
import {
  createImage,
  getAllImages,
  removeImage,
  updateImage,
} from "../controllers/ImageController";

export const imagesRouter = Router();

imagesRouter.get("/", getAllImages);
imagesRouter.post("/", createImage);
imagesRouter.delete("/:id", removeImage);
imagesRouter.patch("/:id", updateImage);
