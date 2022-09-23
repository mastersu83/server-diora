"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const PORT = process.env.PORT;
mongoose_1.default
    .connect(process.env.MONGODB_URI || "")
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "dist")));
app.use((0, cors_1.default)());
app.use("/uploads", express_1.default.static("uploads"));
app.use("/api", routes_1.router);
app.listen(PORT, () => console.log(`server start on port ${PORT}`));
