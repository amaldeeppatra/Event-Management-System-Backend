function userSignup(req, res){
    res.json("sign up")
}

function userSignin(req, res){
    res.json("sign in")
}

module.exports = {
    userSignup,
    userSignin,
}