import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  adminController,
} from "../controllers/userController.js";
import express from "express";
import {
  createUserValidation,
  updateUserValidation,
  validate,
} from "../middlleware/validation.js";
import createError from "http-errors";
import protect from "../middlleware/protect.js";
import { adminOnly } from "../middlleware/adminOnly.js";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

router.post("/api/users", createUserValidation, validate, createUser);
router.post("/api/users/login", loginUser);

router.get("/api/users", getUser);
router.get("/api/users/admin", protect, adminOnly, adminController);

router.put("/api/users/:id", updateUserValidation, validate, updateUser);

router.delete("/api/users/:id", deleteUser);

router.get("/api/test-error", (req, res) => {
  throw createError(404, "User not found");
});

router.get("/api/test-error1", (req, res, next) => {
  const error = new Error("User not found");
  next(error);
});

export default router;
