import express, { Router } from "express";
import passport from "../config/passport.js";
import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    prompt: "select_account",
  }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  async (req, res) => {
    const user = req.user;
    const email = user.emails[0].value;

    const isUserExist = await userModel.findOne({ email });

    // ------- Handle Login -------
    if (isUserExist) {
      const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    }

    // ------- Handle SignUp -------
    const newUser = await userModel.create({
      fullname: user.displayName,
      email,
      googleId: user.id,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  },
);

export default router;
