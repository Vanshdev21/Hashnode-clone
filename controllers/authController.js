import User from "../models/User.js";
import { signupSchema, loginSchema } from "../validators/authValidaors.js";
import bcrypt from "bcrypt";
import { generateJWTToken } from "../utils/generateToken.js";

export async function signup(req, res) {
  try {
    const signupValidate = signupSchema.safeParse(req.body);

    if (!signupValidate.success) {
      return res.status(400).json({
        message: "Validation failed",
        error: signupValidate.error.issues[0].message,
      });
    }

    const { name, email, password } = signupValidate.data;

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateJWTToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    });

    const { password: _, ...userData } = user.toObject();

    return res.status(201).json({
      message: "User successfully created",
      data: userData,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export async function login(req, res) {
  try {
    const loginValidate = loginSchema.safeParse(req.body);

    if (!loginValidate.success) {
      return res.status(400).json({
        message: "Validation failed",
        error: loginValidate.error.issues[0].message,
      });
    }

    const { email, password } = loginValidate.data;

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateJWTToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    });

    const { password: _, ...userData } = user.toObject();

    return res.status(200).json({
      message: "User successfully LogedIn",
      data: userData,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export async function getMe(req, res) {
  try {
    const { user } = req;

    const myProfile = await User.findById(user._id).select("-password");

    if (!myProfile) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile fetched successfully",
      data: myProfile,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
