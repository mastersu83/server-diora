import { Router } from "express";
import {
  createImage,
  getAllImages,
  removeImage,
  updateImage,
} from "../controllers/ImageController";
import checkAuth from "../utils/checkAuth";

export const imagesRouter = Router();

imagesRouter.get("/", getAllImages);
imagesRouter.post("/", checkAuth, createImage);
imagesRouter.delete("/:id", checkAuth, removeImage);
imagesRouter.patch("/:id", checkAuth, updateImage);
