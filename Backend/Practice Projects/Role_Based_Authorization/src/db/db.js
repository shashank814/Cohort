const mongoose = require("mongoose")

async function connectDB() {
    

    try {

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("DB Connected");
        
        
    } catch (error) {
        console.error("Databse connection error", error);
    }
}

module.exports = connectDB