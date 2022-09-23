"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = require("express");
const uploadFileMiddleware_1 = require("../utils/uploadFileMiddleware");
const UploadController_1 = require("../controllers/UploadController");
exports.uploadRouter = (0, express_1.Router)();
exports.uploadRouter.post("/", uploadFileMiddleware_1.uploadFileMiddleware, UploadController_1.uploadFile);
exports.uploadRouter.delete("/", UploadController_1.deleteFile);
