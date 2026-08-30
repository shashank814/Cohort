const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
const recipeRoutes = require("./routes/recipe.routes")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
     origin: "http://localhost:5173",
     credentials: true
}))

app.get("/", (req, res) => {
     res.send("server is running")
})

app.use("/api/auth", authRoutes)
app.use("/api/recipe", recipeRoutes)

module.exports = app;