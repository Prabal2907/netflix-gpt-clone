import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import router from "./authroutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://netflix-gpt-clone-tau.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("hey how are you??");
  return res.status(201).json({
    message: "heyy from the server",
    success: true,
  });
});

app.use("/api/user", router);

app.listen(5000, () => {
  console.log("Sever is running");
});
