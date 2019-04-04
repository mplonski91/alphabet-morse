const yargs = require("yargs");
const chalk = require("chalk");
const { MorseConverter } = require("./logic");

const log = console.log;
const argv = yargs.argv;
const word = argv.word;
const converter = new MorseConverter(word);

//node app.js --word="text"
if (word) {
  log(converter.convertText());
} else {
  log(chalk.red("Enter the word using command 'word'"));
}
