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
  }
};

const getAll = () => {
  console.log("getting all:", fetchNote());
};

const getNote = title => {
  console.log("getting Note:", title);
};

const removeNote = () => {
  console.log("remove Note:");
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
