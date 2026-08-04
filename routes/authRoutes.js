import express from "express";
import { signup, login, getMe } from "../controllers/authController.js";
import { userAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/me", userAuth, getMe);

export default router;
