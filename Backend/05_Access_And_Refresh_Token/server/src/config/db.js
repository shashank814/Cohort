import mongoose from "mongoose"
import config from "./config.js"

export async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log("DB Connected");
    
}