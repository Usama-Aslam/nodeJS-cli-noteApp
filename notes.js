console.log("starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  var note = [];
  var newNote = {
    title,
    body
  };
  try {
    var oldNotes = fs.readFileSync("greeting.json");
    note = JSON.parse(oldNotes);
  } catch (error) {}

  var duplicateNote = note.filter(note => note.title == title);

  if (duplicateNote.length == 0) {
    note.push(newNote);

    fs.writeFileSync("greeting.json", JSON.stringify(note));
    console.log("adding Note:", title, body);
  }
  // fs.appendFileSync("greeting.txt");
};

const getAll = () => {
  var notes = fs.readFileSync("greeting.json");
  var newNote = JSON.parse(notes);
  console.log("getting all:", newNote);
};

const getNote = title => {
  console.log("getting Note:", title);
};

const removeNote = () => {
  console.log("remove Note:");
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
