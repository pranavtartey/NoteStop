const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Email is required"]
    },
    notes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Note"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);