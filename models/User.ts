import mongoose from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  avatarUrl?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
