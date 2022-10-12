"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = require("express");
const ImageController_1 = require("../controllers/ImageController");
const checkAuth_1 = __importDefault(require("../utils/checkAuth"));
exports.imagesRouter = (0, express_1.Router)();
exports.imagesRouter.get("/", ImageController_1.getAllImages);
exports.imagesRouter.post("/", checkAuth_1.default, ImageController_1.createImage);
exports.imagesRouter.delete("/:id", checkAuth_1.default, ImageController_1.removeImage);
exports.imagesRouter.patch("/:id", checkAuth_1.default, ImageController_1.updateImage);
