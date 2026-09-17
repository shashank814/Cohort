import express, { Router } from "express"
import { deleteUrl, generateUrl, getUrls, shortCodeUrl } from "../controllers/url.controller.js"

const router = Router()

router.post("/", generateUrl)
router.get("/get", getUrls)
router.get("/:code", shortCodeUrl)
router.delete("/delete/:id", deleteUrl)

export default router