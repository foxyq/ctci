"use strict";

module.exports = function assertEqual(
  actual = 0,
  expected = 0,
  testName = "test"
) {
  if (typeof actual === "object") {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("PASSED");
    } else {
      console.log(
        `FAILED [${testName}] Expected ${expected} , but got ${actual}`
      );
    }
  } else {
    if (actual === expected) {
      console.log("PASSED");
    } else {
      console.log(
        `FAILED [${testName}] Expected ${expected} , but got ${actual}`
      );
    }
  }
};
