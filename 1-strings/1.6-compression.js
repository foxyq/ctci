const assertEqual = require("./1.0-helper");

const compression = word => {
  if (!word) {
    return false;
  }

  let compressed = "";
  let prevChar = word[0];
  let charCount = 1;

  for (let i = 1; i <= word.length; i++) {
    const currChar = word[i];

    if (currChar === prevChar) {
      charCount++;
    } else {
      compressed += prevChar + charCount;
      prevChar = currChar;
      charCount = 1;
    }
  }

  return word.length < compressed.length ? word : compressed;
};

const testArray = [
  ["aaaabc", "a4b1c1"],
  ["aaabbcddddddd", "a3b2c1d7"],
  ["aabcccccaaa", "a2b1c5a3"],
  ["xxxgggggggtyf", "x3g7t1y1f1"],
  ["xgtqwertogkjto", "xgtqwertogkjto"]
];

testArray.forEach(item => {
  assertEqual(compression(item[0]), item[1], "is compressed");
});
