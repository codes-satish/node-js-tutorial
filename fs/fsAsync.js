const fs = require("fs");
const path = require("path");

// fs.writeFileSync(): writes data to a fileURLToPath. if the file does not existsSync, it will be created. if the file exists, it overwrites the content

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

const writeFile = fs.writeFileSync(
  filePath,
  "This is the first file which is created automatically 2",
  "utf-8"
);

console.log(writeFile);

const readFile = fs.readFileSync(filePath, "utf-8");

// console.log("readFile", readFile);

// const appendDataToFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the extra content",
//   "utf-8"
// );

// console.log(appendDataToFile)

// const deleteFile = fs.unlinkSync(filePath);

// console.log('deleteFile', deleteFile)

const name = "newTest.js";
const newFileName = path.join(__dirname, name);

const rename = fs.renameSync(filePath, newFileName);

console.log(rename)
