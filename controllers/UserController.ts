import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req: Request, res: Response) => {
  try {
    const passwordHash = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwordHash, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      password: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_KEY || "",
      {
        expiresIn: "30d",
      }
    );

    res.json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return res.status(404).json({
        message: "Неверный логин или пароль",
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPass) {
      return res.status(404).json({
        message: "Неверный логин или пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_KEY || "",
      {
        expiresIn: "30d",
      }
    );

    res.json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Нет доступа",
    });
  }
};
