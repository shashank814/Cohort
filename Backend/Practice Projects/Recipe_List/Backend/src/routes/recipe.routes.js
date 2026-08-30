const express = require("express")
const multer = require("multer")
const recipeController = require("../controllers/recipe.controller")
const authUser = require("../middlewares/auth.user")

const upload = multer({ storage: multer.memoryStorage() })

const router = express.Router()

router.post("/new-recipe", authUser.authUser, upload.single("image"), recipeController.addRecipe)

router.get("/my-recipe", authUser.authUser, recipeController.getUserRecipes)

router.patch("/update/:id", authUser.authUser, recipeController.updateRecipe)

router.delete("/delete/:id", authUser.authUser, recipeController.deleteRecipe)

router.get("/getAllRecipe", recipeController.getAllRecipes)

module.exports = router