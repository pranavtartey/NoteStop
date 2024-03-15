const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Note",NoteSchema);