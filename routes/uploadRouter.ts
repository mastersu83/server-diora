import { Router } from "express";
import { uploadFileMiddleware } from "../utils/uploadFileMiddleware";
import { deleteFile, uploadFile } from "../controllers/UploadController";
import checkAuth from "../utils/checkAuth";

export const uploadRouter = Router();

uploadRouter.post("/", checkAuth, uploadFileMiddleware, uploadFile);
uploadRouter.delete("/", checkAuth, deleteFile);
