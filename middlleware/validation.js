import { body, validationResult } from "express-validator";

export const createUserValidation = [
  body("name").notEmpty().withMessage("Please provide a name"),

  body("email")
    .notEmpty()
    .withMessage("Please fill your email")
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("age")
    .isInt({ min: 18 })
    .withMessage("Please provide age greater than 18"),

  body("password")
    .notEmpty()
    .withMessage("Please provide a password")
    .isLength({ min: 8 })
    .withMessage("Please provide a password with at least 8 characters"),
];
export const updateUserValidation = [
  body("name").notEmpty().withMessage("Please provide a name"),

  body("email")
    .notEmpty()
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("age")
    .isInt({ min: 18 })
    .withMessage("Please provide age greater than 18"),

  body("password")
    .notEmpty()
    .withMessage("Please provide a password")
    .isLength({ min: 8 })
    .withMessage("Please provide a password with at least 8 characters"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array(),
    });
  }
  next();
};
