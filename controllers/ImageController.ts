import { Request, Response } from "express";
import { IImage, ImageModel } from "../models/Image";

export const getAllImages = async (req: Request, res: Response) => {
  try {
    const posts = await ImageModel.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

export const createImage = async (
  req: Request<{}, {}, IImage>,
  res: Response
) => {
  try {
    const doc = new ImageModel({
      type: req.body.type,
      imageUrl: req.body.imageUrl,
      typeOfClothing: req.body.typeOfClothing,
    });
    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

export const removeImage = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    ImageModel.findOneAndDelete(
      {
        _id: postId,
      },
      (err: string, doc: IImage) => {
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
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить статью",
    });
  }
};

export const updateImage = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    ImageModel.updateOne(
      {
        _id: postId,
      },
      {
        type: req.body.type,
        imageUrl: req.body.imageUrl,
      },
      (err: string, doc: IImage) => {
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
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить статью",
    });
  }
};
