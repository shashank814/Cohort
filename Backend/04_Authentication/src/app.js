import express from "express"
import jwt from "jsonwebtoken"
import userModel from "./models/user.model.js"
import { authenticate } from "./middleware/auth.middleware.js"
import bcrypt from "bcryptjs"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server is running")
})

app.post("/api/auth/register", async(req, res) => {

    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name, email, password: hash
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.status(201).json({
        message: "user created successfully",
        data: {
            user: {
                email,
                name,
                id: user._id
            },
            token
        }
    })
})

app.get("/api/auth/me", authenticate, async (req, res) => {
    
    console.log(req.user);
    
})

app.post("/api/auth/login", async(req, res) => {

    const { email, password } = req.body;

    const user = await userModel.create({
        name, email, password: hash
    })

    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid) {
        return res.status(400).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.status(200).json({
        message: "user loggedin successfully",
        data: {
            user: {
                email: user.email,
                name: user.name,
            },
        }
    })
})

export default app