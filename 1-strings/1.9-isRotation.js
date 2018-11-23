const assertEqual = require("./1.0-helper");

const isRotation = (s1, s2) => {
  if (s1.length === s2.length && s1.length > 0) {
    const merged = s1 + s1;

    return merged.includes(s2);
  }

  return false;
};

const testArray = [
  ["waterbottle", "terbottlewa", true],
  ["waterbottle", "aterbottlew", true],
  ["waterbottle", "aterbottleX", false],
  ["waterbottle", "waterbo", false]
];

testArray.forEach(row => {
  assertEqual(isRotation(row[0], row[1]), row[2], "is string rotation");
});
