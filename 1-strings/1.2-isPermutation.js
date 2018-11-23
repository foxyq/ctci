const assertEqual = require("./1.0-helper");

const isPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const mapS1 = new Map();

  for (let i = 0; i < s1.length; i++) {
    mapS1.set(s1[i], i);
  }

  for (let i = 0; i < s2.length; i++) {
    if (mapS1.get(s2[i]) === undefined) return false;
  }

  return true;
};

assertEqual(
  isPermutation("abc", "ssa"),
  false,
  "string2 is permutation of string1"
);
assertEqual(
  isPermutation("abc", "bca"),
  true,
  "string2 is permutation of string1"
);
assertEqual(
  isPermutation("abc", "cba"),
  true,
  "string2 is permutation of string1"
);
assertEqual(
  isPermutation("abc", "cbc"),
  true,
  "string2 is permutation of string1"
);
assertEqual(
  isPermutation("xgb", "bgx"),
  true,
  "string2 is permutation of string1"
);
assertEqual(
  isPermutation("xgb", "xbg"),
  true,
  "string2 is permutation of string1"
);
