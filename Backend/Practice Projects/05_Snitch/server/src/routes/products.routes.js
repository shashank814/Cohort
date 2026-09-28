import { Router } from "express";
import { authenticate, authenticateSeller } from "../middleware/auth.middleware.js";
import { createProduct, listAllProducts, listAllProductsToSeller, listProduct, unlistProduct } from "../controllers/product.controller.js";
import multer, { memoryStorage } from "multer";
import { createProductValidator, listProductValidator, unListProductValidator } from "../validators/product.validator.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024,
  },
  // fileFilter :- to accept files of specific type like image, audio, video, pdf etc
});

const router = Router();

router.post("/add-products", authenticate, authenticateSeller,
  upload.array("images"),
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },
  createProductValidator,
  createProduct,
);

router.get("/", authenticate, listAllProducts)

router.get("seller", authenticate, authenticateSeller, listAllProductsToSeller)

router.patch("/unlist/:id", authenticate, authenticateSeller, unListProductValidator, unlistProduct)

router.patch("/unlist/:id", authenticate, authenticateSeller, listProductValidator, listProduct)

export default router;
