import { Request, Response } from "express";
import fs from "fs";

export const uploadFile = (req: Request, res: Response) => {
  res.json({
    imageUrl: `uploads/${req.file?.originalname}`,
  });
};

export const deleteFile = (req: Request, res: Response) => {
  if (fs.existsSync(`${req.body?.imageUrl}`)) {
    fs.unlink(`${req.body?.imageUrl}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!err) {
        res.json({ success: true });
      }
    });
  } else {
    res.json({ message: "Файл не существует" });
  }
};
