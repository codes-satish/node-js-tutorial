const fs = require("fs");
const path = require("path");
const file = __dirname;
const fileName = "test.txt";

fs.promises
  .readdir(file)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const mainPath = path.join(__dirname, fileName);

fs.promises
  .writeFile(mainPath, "This is the file created from promises")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fs.promises
  .readFile(mainPath, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const renameFile = path.join(__dirname, "rename.txt");

fs.promises
  .rename(mainPath, renameFile)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fs.promises
  .unlink(renameFile)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
