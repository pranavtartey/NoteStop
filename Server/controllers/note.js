const Note = require("../models/note");
const User = require("../models/user");

module.exports.createNote = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    const user = await User.findById(req.params.userid);
    console.log(user);
    const note = new Note({...req.body});
    console.log(note);
    user.notes.push(note);
    await user.save();
    await note.save().then(()=> {
        console.log("This note has been saved successfully");
    })
    // res.json({user});
};
