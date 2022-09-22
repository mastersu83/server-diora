import { Router } from "express";
import { uploadFileMiddleware } from "../utils/uploadFileMiddleware";
import { deleteFile, uploadFile } from "../controllers/UploadController";

export const uploadRouter = Router();

uploadRouter.post("/", uploadFileMiddleware, uploadFile);
uploadRouter.delete("/", deleteFile);
