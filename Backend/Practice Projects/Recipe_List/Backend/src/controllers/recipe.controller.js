const recipeModel = require("../models/recipe.model");
const userModel = require("../models/user.model");
const {uploadFile} = require("../services/storage.services")

async function addRecipe(req, res) {
    
    const { title, description, ingredients, createdBy } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"))

    const newRecipe = await recipeModel.create({
        title,
        description,
        ingredients,
        createdBy: req.user.id,
        image: result.url,
    })

    return res.status(201).json({
        message: "recipe added successfully",
        newRecipe: {
            id: newRecipe._id,
            title: newRecipe.title,
            description: newRecipe.description,
            ingredients: newRecipe.ingredients,
            createdBy: newRecipe.createdBy,
            image: newRecipe.image
        }
    })
}

async function getUserRecipes(req, res) {

    const userId = req.user.id

    const recipes = await recipeModel.find({
        createdBy: userId
    })

    return res.status(200).json({
        message: "recipe fetched successfully",
        recipes: recipes
    })
}

async function updateRecipe(req, res) {
    const userId = req.user.id
    const { id } = req.params;

    const recipe = await recipeModel.findByIdAndUpdate(
        { _id: id, createdBy: userId },
        req.body,
        {new : true}
    )

    if(!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    return res.json({
        message: "recipe updated successfully",
        recipe: recipe
    })
}

async function deleteRecipe(req, res) {
    const userId = req.user.id
    const { id } = req.params;

    const recipe = await recipeModel.findByIdAndDelete(
        { _id: id, createdBy: userId },
    )

    if(!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    return res.json({
        message: "recipe updated successfully",
    })
}

async function getAllRecipes(req, res) {
    
    const recipe = await recipeModel.find()

    return res.status(200).json({
        message: "recipes fetched successfully",
        recipe: recipe
    })
}

module.exports = { addRecipe, getUserRecipes, updateRecipe, deleteRecipe, getAllRecipes }