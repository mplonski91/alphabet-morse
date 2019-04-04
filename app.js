const yargs = require("yargs");
const { logic } = require("./logic");

const argv = yargs.argv;
const word = argv.word;

//node app.js --word="text"
if (word) {
  logic(word);
} else {
  console.log("Enter the word using command 'word'");
}
