"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = require("express");
const uploadFileMiddleware_1 = require("../utils/uploadFileMiddleware");
const UploadController_1 = require("../controllers/UploadController");
const checkAuth_1 = __importDefault(require("../utils/checkAuth"));
exports.uploadRouter = (0, express_1.Router)();
exports.uploadRouter.post("/", checkAuth_1.default, uploadFileMiddleware_1.uploadFileMiddleware, UploadController_1.uploadFile);
exports.uploadRouter.delete("/", checkAuth_1.default, UploadController_1.deleteFile);
