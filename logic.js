const { morseCode } = require("./letters");

function logic(word) {
  let convertedText = "";
  const splitWords = word.split("");

  splitWords.forEach(element => {
    Object.entries(morseCode).forEach(char => {
      let key = char[0];
      let value = char[1];
      if (value === element) {
        // console.log("Value: ", value);
        // console.log("Element :", element);
        // console.log("Mors", key);
        convertedText += key;
      }
    });
  });
  console.log("Orginal text :", word);
  console.log("Converted text :", convertedText);
}

module.exports = {
  logic
};
