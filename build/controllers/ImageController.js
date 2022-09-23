"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = exports.removeImage = exports.createImage = exports.getAllImages = void 0;
const Image_1 = require("../models/Image");
const getAllImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Image_1.ImageModel.find();
        res.json(posts);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить статьи",
        });
    }
});
exports.getAllImages = getAllImages;
const createImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = new Image_1.ImageModel({
            type: req.body.type,
            imageUrl: req.body.imageUrl,
            typeOfClothing: req.body.typeOfClothing,
        });
        const post = yield doc.save();
        res.json(post);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось создать статью",
        });
    }
});
exports.createImage = createImage;
const removeImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        Image_1.ImageModel.findOneAndDelete({
            _id: postId,
        }, (err, doc) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: "Не удалось удалить статью",
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: "Статья не найдена",
                });
            }
            res.json({
                success: true,
            });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось удалить статью",
        });
    }
});
exports.removeImage = removeImage;
const updateImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        Image_1.ImageModel.updateOne({
            _id: postId,
        }, {
            type: req.body.type,
            imageUrl: req.body.imageUrl,
        }, (err, doc) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: "Не удалось обновить статью",
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: "Статья не найдена",
                });
            }
            res.json({
                success: true,
            });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось обновить статью",
        });
    }
});
exports.updateImage = updateImage;
