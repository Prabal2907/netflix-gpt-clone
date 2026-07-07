import jwt from "jsonwebtoken";
import usermodel from "./usermodel.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.log("No token here");
      return res.status(401).json({
        message: "no tokens",
        success: false,
      });
    }
    const decode = jwt.verify(token,process.env.SECRET_KEY);
    req.id = decode.userId;
    next();

  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
