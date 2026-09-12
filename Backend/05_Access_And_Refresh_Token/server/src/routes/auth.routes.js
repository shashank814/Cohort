import express, { Router } from "express"
import { getInfo, refresh, register } from "../controller/auth.controller.js"

const router = Router()

router.post("/register", register)
router.get("/me", getInfo)
router.post("/post", refresh)

export default router