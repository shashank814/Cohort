import userModel from "../models/user.model.js";

export async function register(req, res) {
    
    const { email, phone, password } = req.body;

    const user = await userModel.create({
        email,
        phone,
        password: password // hash format
    })

    res.status(201).json({
        message: "user registered successfully",
        data: {
            email,
            phone,
            id: user._id
        }
    })

}
