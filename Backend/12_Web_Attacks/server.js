import express from "express"
import rateLimit from "express-rate-limit"

const app = express()

const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,  // 1 minute
    limit: 5,
    message: { message: "Too many login attempts. Try again in 1 minite." }
})

app.get("/api/login", loginLimiter, (req, res) => {
    res.send("login endpoint")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})