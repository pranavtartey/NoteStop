const Note = require("../models/note");
const User = require("../models/user");

module.exports.createNote = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const user = await User.findById(req.name.userId);
  console.log(user);
  const note = new Note({ ...req.body });
  console.log(note);
  user.notes.push(note);
  await user.save();
  await note.save().then(() => {
    console.log("This note has been saved successfully");
  });
  res.status(201).json({ message: "The note was created successfully" });
  //We always need to send something in response so that the axios on the client side can process the further line of code otherwise it will not proceed and keep waiting for the server to send some response and no error will be shown as everything was working perfectly
};

module.exports.getNote = async (req, res, next) => {
  const { noteid } = req.params;
  const note = await Note.findById(noteid);
  res.status(201).json(note);
  //We always need to send something in response so that the axios on the client side can process the further line of code otherwise it will not proceed and keep waiting for the server to send some response and no error will be shown as everything was working perfectly
};

module.exports.updateNote = async (req, res, next) => {
  const { noteid } = req.params;
  console.log(req.body);
  const updatedNote = await Note.findByIdAndUpdate(
    noteid,
    { ...req.body },
    { new: true }
  );
  await updatedNote.save().then(() => {
    console.log("Note was updated successfully");
  });
  console.log(updatedNote);
  res.status(201).json({ message: "The Note was updated successfully" });
  //We always need to send something in response so that the axios on the client side can process the further line of code otherwise it will not proceed and keep waiting for the server to send some response and no error will be shown as everything was working perfectly
};

module.exports.deleteNote = async (req, res, next) => {
  const { id } = req.params;
  //id is for the note id for which we are applying the delete operation
  const { userId } = req.name;
  await User.findByIdAndUpdate(userId, {
    $pull: {
      notes: id,
    },
  });
  await Note.findByIdAndDelete(id);
  console.log("The Note was deleted succesfully");
  res.status(201).json({ message: "The note was deleted successfully" });
  //We always need to send something in response so that the axios on the client side can process the further line of code otherwise it will not proceed and keep waiting for the server to send some response and no error will be shown as everything was working perfectly
};
