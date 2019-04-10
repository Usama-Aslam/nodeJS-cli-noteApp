console.log("starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  var note = [];
  var newNote = {
    title,
    body
  };
  try {
    note = fetchNote();
  } catch (error) {}

  var duplicateNote = note.filter(note => note.title == title);

  if (duplicateNote.length == 0) {
    note.push(newNote);
    writeNote(note);
  } else console.log("note Title:Taken");
};

const getAll = () => {
  console.log("getting all:", fetchNote());
};

const getNote = title => {
  console.log("getting Note:", title);
  var notes = fetchNote();
  var searchedNote = notes.filter(note => note.title == title);
  console.log(searchedNote);
};

const removeNote = title => {
  var notes = fetchNote();
  var newNotes = notes.filter(note => note.title !== title);
  if (newNotes.length !== notes.length) {
    writeNote(newNotes);
    console.log("Old Notes:", notes);
    console.log("New Notes:", fetchNote());
  } else console.log("notes not found");
};

const fetchNote = () => {
  return JSON.parse(fs.readFileSync("greeting.json"));
};

const writeNote = notes => {
  fs.writeFileSync("greeting.json", JSON.stringify(notes));
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
