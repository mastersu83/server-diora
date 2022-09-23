"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    if (token) {
        try {
            req.body.userId = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY || "");
            next();
        }
        catch (err) {
            return res.status(403).json({
                message: "Нет доступа",
            });
        }
    }
    else {
        return res.status(403).json({
            message: "Нет доступа",
        });
    }
};
