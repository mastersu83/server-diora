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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const passwordHash = req.body.password;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(passwordHash, salt);
        const doc = new User_1.UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            password: hash,
        });
        const user = yield doc.save();
        const token = jsonwebtoken_1.default.sign({
            _id: user._id,
        }, process.env.JWT_KEY || "", {
            expiresIn: "30d",
        });
        res.json({ user, token });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось зарегистрироваться",
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.UserModel.findOne({ email: req.body.email }).select("+password");
        if (!user) {
            return res.status(404).json({
                message: "Неверный логин или пароль",
            });
        }
        const isValidPass = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (!isValidPass) {
            return res.status(404).json({
                message: "Неверный логин или пароль",
            });
        }
        const token = jsonwebtoken_1.default.sign({
            _id: user._id,
        }, process.env.JWT_KEY || "", {
            expiresIn: "30d",
        });
        res.json({ user, token });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось авторизоваться",
        });
    }
});
exports.login = login;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.UserModel.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({
                message: "Пользователь не найден",
            });
        }
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Нет доступа",
        });
    }
});
exports.getMe = getMe;
