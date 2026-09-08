import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/api/users", createUser);

router.get("/api/users", getUser);

router.put("/api/users/:id", updateUser);

router.delete("/api/users/:id", deleteUser);

router.get("/api/test-error", (req, res) => {
  throw new Error("error");
});

export default router;
