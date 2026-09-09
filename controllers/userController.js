import User from "../models/User.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, age } = req.body;
  const newUser = await User.create({
    name,
    email,
    age,
  });

  return res.json(newUser);
});

export const getUser = asyncHandler(async (req, res, next) => {
  const { name, age } = req.query;
  const filter = {};

  if (name) {
    filter.name = name;
  }

  if (age) {
    filter.age = Number(age);
  }

  const users = await User.find(filter);

  return res.json(users);
});

export const updateUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { name, age, email } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true },
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json("User not found");
  }

  res.json({
    message: "User deleted successfully",
  });
});
