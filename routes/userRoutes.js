import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import express from "express";
import createError from "http-errors";

const router = express.Router();

router.post("/api/users", createUser);

router.get("/api/users", getUser);

router.put("/api/users/:id", updateUser);

router.delete("/api/users/:id", deleteUser);

router.get("/api/test-error", (req, res) => {
  throw createError(404, "User not found");
});

export default router;
