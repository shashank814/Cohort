import "dotenv/config.js"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.NODEMAILER_USER,
        clientId: process.env.NODEMAILER_CLIENT_ID,
        clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
        refreshToken: process.env.NODEMAILER_REFRESH_TOKEN
    }
})

transporter.verify((error, success) => {
    if(error) {
        console.log("Error connecting to email server: ", error);
    } else {
        console.log("Email server is ready to send messages");
    }
})

export default transporter