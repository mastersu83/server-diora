import { Router } from "express";
import { getMe, login, register } from "../controllers/UserController";
import checkAuth from "../utils/checkAuth";

export const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/me", checkAuth, getMe);
