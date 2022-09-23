"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const checkAuth_1 = __importDefault(require("../utils/checkAuth"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/login", UserController_1.login);
exports.userRouter.post("/register", UserController_1.register);
exports.userRouter.get("/me", checkAuth_1.default, UserController_1.getMe);
