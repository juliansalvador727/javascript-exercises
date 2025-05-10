const reverseString = function (string) {
  let word = "";
  for (let i = 1; i <= string.length; i++) {
    word += string[string.length - i];
  }
  return word;
};

// Do not edit below this line
module.exports = reverseString;
