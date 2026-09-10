import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: [3, "name must be at least 3 characters long"],
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String
    }
})

const userModel = mongoose.model("users", userSchema)

export default userModel