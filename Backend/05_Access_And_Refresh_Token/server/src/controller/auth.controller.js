import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateToken, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";
import { decode } from "jsonwebtoken";

export async function register(req, res) {
    
    const { name, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email })

    if(isUserAlreadyExist) {
        return res.status(400).json({
            message: "user already exist",
            errors: [
                {
                    path: "email",
                    message: "user already exist"
                }
            ]
        })
    }

    const user = await userModel.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
    })

    const { accessToken, refreshToken } = generateToken({ userId: user._id })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true
    })

    user.refreshToken = refreshToken
    await user.save()

    res.status(200).json({
        message: "user registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email
            }
        },
        accessToken
    })

}

export async function getInfo(req, res) {
    const accessToken = req.headers.authorization?.split(" ")[1]

    if(!accessToken) {
        return res.status(401).json({
            message: "Unauthorized, access token not found",
        })
    }

    try {

        const decoded = verifyAccessToken(accessToken)

        const user = await userModel.findById(decoded.id)

        res.status(200).json({
            message: "user fetched successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        })
        
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired access token"
        })
    }
}

export async function refresh(req, res) {
    
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken) {
         return res.status(401).json({
            message: "Unauthorized, refresh token not found"
        })
    }

    try {
        const decoded = verifyRefreshToken(refreshToken)

        const user = await userModel.findById(decode.id) 

        if(refreshToken !== user.refreshToken) {

            user.refreshToken = null
            await user.save()

            return res.status(401).json({
                message: "Unauthorized, refresh token mismatch"
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateToken({ userId: user._id })

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

        user.refreshToken = newRefreshToken
        await user.save()

        res.status(200).json({
            message: "Token refreshed successfully",
            accessToken,
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired refresh token"
        })
    }
}