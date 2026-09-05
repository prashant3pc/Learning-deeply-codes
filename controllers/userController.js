import User from "../models/User.js";

export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = await User.create({
    name,
    email,
    age,
  });
  return res.json(newUser);
};
