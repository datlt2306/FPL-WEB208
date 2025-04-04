import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routers/product.router.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);

mongoose.connect(`mongodb://localhost:27017/wd19324`);

export const viteNodeApp = app;
