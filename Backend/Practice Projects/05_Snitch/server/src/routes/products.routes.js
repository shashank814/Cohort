import { Router } from "express"
import { authenticate } from "../middleware/auth.middleware.js"
import { createProduct } from "../controllers/product.controller.js"
import multer, { memoryStorage } from "multer"
import { createProductValidator } from "../validators/product.validator.js"

const upload = multer({ storage: multer.memoryStorage(),
    limits: {
        files: 5,
        fileSize: 1 * 1024 * 1024
    },
    // fileFilter :- to accept files of specific type like image, audio, video, pdf etc
 })

const router = Router()

router.post("/add-products", authenticate, (req, res, next) => {
    if(req.user.role !== "seller") {
        return res.status(403).json({
            message: "user is not authorized to create products"
        })
    }
    next()
}, upload.array("images"), (req, res, next) => {

    req.body.price = req.body.price ? JSON.parse(req.body.price) : [];
    req.body.sizes = req.body.sizes ? JSON.parse(req.body.sizes) : [];

    next()
}, 
createProductValidator,
createProduct)

export default router
