import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

export const authenticate = async (req, res, next) => {

    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({
            message: "token not found",
        })
    }

    const data = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(data.id)

    // creating new value user inside req
    req.user = user

    next()
}