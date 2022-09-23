"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = require("express");
const ImageController_1 = require("../controllers/ImageController");
exports.imagesRouter = (0, express_1.Router)();
exports.imagesRouter.get("/", ImageController_1.getAllImages);
exports.imagesRouter.post("/", ImageController_1.createImage);
exports.imagesRouter.delete("/:id", ImageController_1.removeImage);
exports.imagesRouter.patch("/:id", ImageController_1.updateImage);