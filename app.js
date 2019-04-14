console.log("starting application");

const fs = require("fs");
const os = require("os");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs
  .command("add", "add a note", {
    title: {
      demand: true,
      description: "give a title",
      alias: "t"
    },
    body: {
      demand: true,
      description: "give a body",
      alias: "b"
    }
  })
  .command("list", "read all list")
  .command("remove", "remove a note", {
    title: {
      demand: true,
      description: "give a title",
      alias: "t"
    }
  })
  .command("read", "read a note", {
    title: {
      demand: true,
      description: "give a title",
      alias: "t"
    }
  }).argv;
const command = process.argv[2];

console.log("yargs:", argv);

if (command == "add") {
  notes.addNote(argv.title, argv.body);
} else if (command == "list") {
  notes.getAll();
} else if (command == "remove") {
  notes.removeNote(argv.title);
} else if (command == "read") {
  notes.getNote(argv.title);
} else console.log("command not defined");
