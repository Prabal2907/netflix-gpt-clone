import express from "express";
import {
  get_profile,
  login,
  logout,
  register,
  updating_profile,
} from "./authcontroller.js";
import { isAuthenticated } from "./isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.put("/updateprofile", isAuthenticated, updating_profile); 
router.get("/profile", isAuthenticated, get_profile); 

export default router;