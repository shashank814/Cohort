const mongoose = require("mongoose")

async function connectDB(req, res) {
    
    mongoose.connect(process.env.MONGODB_URI)

    console.log("DB Connected");
    
}

module.exports = connectDB