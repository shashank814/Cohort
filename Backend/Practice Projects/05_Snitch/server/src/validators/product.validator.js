import { body, validationResult } from "express-validator";

export const createProductValidator = [
  body("title")
    .exists()
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string")
    .bail()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Title length must be between 2 to 100 characters")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Title can only have english small case and capital case"),

  body("description")
    .exists()
    .withMessage("Description is required")
    .bail()
    .isString()
    .withMessage("Description must be a string")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("Description length must be between 2 to 100 characters"),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat()
    .withMessage("price amount must be a floating number"),

  body("price.currency")
    .exists()
    .withMessage("Currency amount is required")
    .bail()
    .isFloat()
    .withMessage("Currency must be a string value")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("Currency either be INR or USD"),

  body("sizes.0")
    .exists().withMessage("Size is required").bail()
    .isFloat()
    .withMessage("Size must be a string value")
    .bail()
    .isIn([ "XS", "S", "M", "L", "XL", "XXL" ]).withMessage("Size must be one of these")
    ,

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Data",
        errors: errors.array(),
      });
    }

    next();
  },
];
