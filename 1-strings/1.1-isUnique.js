const assertEqual = require("./1.0-helper");

const isUnique = word => {
  for (let i = 0; i < word.length; i++) {
    const characterPosition = word.indexOf(word[i]);

    if (word.indexOf(word[i], characterPosition + 1) !== -1) {
      return false;
    }
  }

  return true;
};

assertEqual(isUnique("asd"), true, "unique characters in index");
assertEqual(isUnique("abcA"), true, "unique characters in index");
assertEqual(isUnique("xxx"), false, "unique characters in index");
assertEqual(isUnique("xssdx"), false, "unique characters in index");
assertEqual(isUnique("apkxqwes"), true, "unique characters in index");
