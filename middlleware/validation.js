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
];

export const updateUserValidation = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Please enter your updating name"),

  body("email").optional().isEmail(),
  body("age")
    .optional()
    .isInt({ min: 18 })
    .withMessage("Please provide age greater than 18"),
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
