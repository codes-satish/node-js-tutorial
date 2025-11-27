const path = require("path");

// console.log("path", path);

console.log("Hello, World!");
console.log("This is a simple Node.js application.");

const { addTwoNumbers } = require("./math");

const result = addTwoNumbers(5, 7);
// console.log(`The sum of 5 and 7 is: ${result}`);

const filePath = path.resolve("D", "satish", ".txt");

// console.log("filePath", { filePath });
