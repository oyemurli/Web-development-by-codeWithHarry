// In this file we read node.js modules.
// We can import modules use to require. and here we imported a fs module.
let fs = require("fs");

// Here we are reading a file help of module fs and fs.readFileSync is the method of reading a file. 
let text = fs.readFileSync("56-aman.txt", "utf-8");

// Here we printing a variable.
console.log(text);

// Here we are replacing a word with the help of replace module.
text = text.replace("officer", "dabang");
console.log(text);

console.log("Creating a new file...");

// Here we are creating a file with the help of fs module and fs.writeFileSync is the method of creating amy file.
fs.writeFileSync("56-murli.txt", text);
