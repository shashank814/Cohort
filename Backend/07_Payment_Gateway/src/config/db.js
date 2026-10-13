import config from "./config.js";
import mongoose from "mongoose"

export default async function connectDB(req, res) {
    await mongoose.connect(config.MONGODB_URI)
    console.log("DB Connected");
}