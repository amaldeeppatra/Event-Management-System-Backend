const User = require("../models/user");

async function userSignup(req, res){
    try{
        const {fullName, email, password} = req.body;
        await User.create({
            fullName,
            email,
            password,
        })
        res.json({fullName, email, password});
    }
    catch (error){
        res.json(error);
    }
}

async function userSignin(req, res){
    try{
        const {email, password} = req.body;
        const token = await User.matchPasswordAndGenerateToken(email, password);
        // console.log(token)
        return res.cookie("token", token).json("Logged in successfully");
    }
    catch (error){
        res.json("Wrong email or password");
    }
}

module.exports = {
    userSignup,
    userSignin,
}