import User from "../models/User.js";
import createError from "http-errors";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = await User.create({
    name,
    email,
    age,
  });

  return res.json({
    success: true,
    data: newUser,
  });
});

export const getUser = async (req, res, next) => {
  const { name, age } = req.query;
  const filter = {};

  if (name) {
    filter.name = name;
  }

  if (age) {
    filter.age = Number(age);
  }

  const users = await User.find(filter);

  return res.json({
    success: true,
    data: users,
  });
};

export const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, age, email } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true },
  );

  if (!user) {
    throw createError(404, "User not found");
  }
  res.json({
    success: true,
    data: user,
  });
});

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user not found",
    });
  }

  res.json({
    success: true,
    data: user,
    message: "user deleted successfully",
  });
};
