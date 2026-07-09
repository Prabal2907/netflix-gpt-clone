import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import usermodel from "./usermodel.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing_user = await usermodel.findOne({ email });
    if (existing_user) {
      return res.status(401).json({
        message: "User exists with this email",
        success: false,
      });
    }

    if (!name || !email || !password) {
      return res.status(401).json({
        message: "Some field is missing",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(password, salt);

    const New_user = await usermodel.create({
      name,
      password: hash_pass,
      email,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "Some field is missing",
        success: false,
      });
    }

    const existing_user = await usermodel.findOne({ email });

    if (!existing_user) {
      return res.status(404).json({
        message: "user do mot exists",
        success: false,
      });
    }

    const pass_check = await bcrypt.compare(password, existing_user.password);
    if (!pass_check) {
      return res.status(404).json({
        message: "password is not correct",
        success: false,
      });
    }

    const token = jwt.sign(
      { userId: existing_user._id, role: existing_user.role },
      process.env.SECRET_KEY,
    );

    res.cookie("token", token, cookieOptions); // 👈 yaha updated

    const user_to_return = {
      name: existing_user.name,
      email: existing_user.email,
    };

    return res.status(201).json({
      messsage: "User logged in",
      user_to_return,
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const get_profile = async (req, res) => {
  try {
    const user_profile = await usermodel.findById(req.id);
    if (!user_profile) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({
      user_profile,
      message: "this is your user profile",
      success: true,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(201)
      .clearCookie("token", cookieOptions) // 👈 yaha bhi updated
      .json({
        message: "logged out successfully",
        succss: true,
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};

export const updating_profile = async (req, res) => {
  try {
    let { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Some field is missing basically",
        success: false,
      });
    }

    const userId = req.id;
    let user = await usermodel.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User id is missing",
        success: false,
      });
    }

    user.name = name;
    user.email = email;

    await user.save();

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.status(201).json({
      message: `${user.name} profile is updated successfully `,
      user,
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};