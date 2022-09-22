import { Router } from "express";
import { imagesRouter } from "./imagesRouter";
import { userRouter } from "./userRouter";
import { uploadRouter } from "./uploadRouter";

export const router = Router();

router.use("/images", imagesRouter);
router.use("/auth", userRouter);
router.use("/upload", uploadRouter);
