"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const uploadFile = (req, res) => {
    var _a;
    res.json({
        imageUrl: `uploads/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`,
    });
};
exports.uploadFile = uploadFile;
const deleteFile = (req, res) => {
    var _a, _b;
    console.log(req.body);
    if (fs_1.default.existsSync(`${(_a = req.body) === null || _a === void 0 ? void 0 : _a.imageUrl}`)) {
        fs_1.default.unlink(`${(_b = req.body) === null || _b === void 0 ? void 0 : _b.imageUrl}`, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            if (!err) {
                res.json({ success: true });
            }
        });
    }
    else {
        res.json({ message: "Файл не существует" });
    }
};
exports.deleteFile = deleteFile;
