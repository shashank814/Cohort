const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function register(req, res) {
    
    const { username, email, password, role = "user"} = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExist) {
        return res.status(409).json({
            message: "user already exist"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: user.id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,       // true only in production (HTTPS)
        sameSite: "lax",     
    })

    res.status(201).json({
        message: "User registered successfully", 
        user : {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })
}

async function login(req, res) {
    
    const { username, email, password } = req.body;

    console.log(req.body);
    

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

      console.log("PASSWORD MATCH:", isPasswordValid); 

    if(!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    return res.status(201).json({
        message: "user logged in successfully",
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })

}

// logout controller
function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,     // true in production
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Logged out successfully",
  });
}

module.exports = { register, login, logout }