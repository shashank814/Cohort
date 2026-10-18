import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connected");
        
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
}