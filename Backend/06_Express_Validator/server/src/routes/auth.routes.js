import express, { Router } from "express"
import { register } from "../controller/auth.controller.js"
import { registerValidation } from "../validators/auth.validator.js"


const router = Router()

router.post("/register", registerValidation, register)

export default router