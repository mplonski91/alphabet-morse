const chalk = require("chalk");
const { morseCode } = require("./letters");
const log = console.log;

class MorseConverter {
  constructor(word) {
    this.word = word;
  }

  // Method for breaking the word into letters
  breakingTheWord() {
    const newWord = this.word;
    return newWord.split("");
  }

  // Method for exchanging values with the key
  reverseChars() {
    const reveseCode = Object.entries(morseCode).reduce(
      (result, [key, value]) => {
        return {
          ...result,
          [value]: key
        };
      },
      {}
    );
    return reveseCode;
  }

  convertText() {
    let convertedText = "";
    const splitWords = this.breakingTheWord();

    splitWords.forEach(element => {
      Object.entries(morseCode).forEach(char => {
        let key = char[0];
        let value = char[1];
        if (value === element) {
          convertedText += `${key} `;
        }
      });
    });
    return chalk`
    Orginal text: {blue ${this.word}}
    Converted text: {green ${convertedText}}
    =============================
    `;
  }
}

module.exports = {
  MorseConverter
};
