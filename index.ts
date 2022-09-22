import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();
app.use(express.json());

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api", router);

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
