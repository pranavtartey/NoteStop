module.exports.registerUser = async(req,res) => {
    console.log(req.body);
    res.send("User is registered Successfully");
}

module.exports.loginUser = async(req,res) => {
    console.log(req.body);
    res.send("User was Logged in successfully");
}