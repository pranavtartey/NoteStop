const User = require("../models/user");

module.exports.registerUser = async(req,res,next) => {
    // console.log(req.body);
    // res.send("User is registered Successfully");
    try{
        const {username,password,email} = req.body;
        const user = new User({username,email});
        const registeredUser = await User.register(user,password);
        req.login(registeredUser, function(err){
            if(err) return next(err);
            res.send(registeredUser);
        })
    }catch(err){
        console.log("error", err.message);
        res.send("User was not registered");
    }
}

module.exports.loginUser = async(req,res) => {
    console.log(req.body);
    res.send("User was Logged in successfully");
}

module.exports.logout = async(req,res) => {
    req.logout(err => {
        if(err) return next(err);
        res.send("Logout was succcessfull");
    })
}