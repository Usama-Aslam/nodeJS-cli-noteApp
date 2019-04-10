console.log("starting application");

const fs = require("fs");
const os = require("os");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
const command = process.argv[2];

console.log("yargs:", argv);

if (command == "add") {
  notes.addNote(argv.title, argv.body);
} else if (command == "list") {
  notes.getAll();
} else if (command == "remove") {
  notes.removeNote();
} else if (command == "read") {
  notes.getNote(argv.title);
} else console.log("command not defined");
