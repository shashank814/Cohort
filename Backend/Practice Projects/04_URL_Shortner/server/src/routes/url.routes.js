import express, { Router } from "express"
import { generateUrl, getUrls, newUrl } from "../controllers/url.controller.js"

const router = Router()

router.post("/", generateUrl)
router.get("/get", getUrls)
router.get("/:code", newUrl)

export default router