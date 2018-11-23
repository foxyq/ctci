const assertEqual = require("./1.0-helper");

const isOneReplace = (s1, s2) => {
  let difference = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      difference++;
    }

    if (difference > 1) {
      return false;
    }
  }
  return true;
};

const isOneInsert = (s1, s2) => {
  // s1 is always shorter
  let i1 = 0;
  let i2 = 0;

  while (i1 < s1.length && i2 < s2.length) {
    if (s1[i1].toLowerCase() !== s2[i2].toLowerCase()) {
      if (i1 !== i2) {
        return false;
      }
      i2++;
    } else {
      i1++;
      i2++;
    }
  }
  return true;
};

const isOneEditAway = (s1, s2) => {
  if (s1.length === s2.length) {
    return isOneReplace(s1, s2);
  } else if (s1.length + 1 === s2.length) {
    return isOneInsert(s1, s2);
  } else if (s1.length - 1 === s2.length) {
    return isOneInsert(s2, s1);
  }
};

const testArray = [
  ["pale", "ple", true],
  ["pales", "pale", true],
  ["pale", "bale", true],
  ["paless", "balesg", false]
];

testArray.forEach(item => {
  assertEqual(isOneEditAway(item[0], item[1]), item[2], "is one edit away");
});
