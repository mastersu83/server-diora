import mongoose from "mongoose";

export interface IImage {
  type: number;
  imageUrl: string;
  typeOfClothing: string;
}

const ImageSchema = new mongoose.Schema<IImage>(
  {
    type: {
      type: Number,
      required: true,
    },
    typeOfClothing: {
      type: String,
      required: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("Image", ImageSchema);
