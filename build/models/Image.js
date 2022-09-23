"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ImageSchema = new mongoose_1.default.Schema({
    type: {
        type: Number,
        required: true,
    },
    typeOfClothing: {
        type: String,
        required: true,
    },
    imageUrl: String,
}, {
    timestamps: true,
});
exports.ImageModel = mongoose_1.default.model("Image", ImageSchema);
