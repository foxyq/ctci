const helper = require("./4.0-helper");
const assertEqual = require("../1-strings/1.0-helper");

const testArray = [
  [
    ["a", "b", "c", "d", "e", "f", "g"],
    [
      ["f", "c"],
      ["f", "b"],
      ["f", "a"],
      ["c", "a"],
      ["b", "a"],
      // ["b", "f"],
      ["b", "e"],
      ["a", "e"],
      ["d", "g"]
    ],
    ["d", "f", "b", "c", "g", "a", "e"]
  ],

  [
    ["a", "b", "c", "d", "e", "f", "g"],
    [
      ["f", "c"],
      ["f", "b"],
      ["f", "a"],
      ["c", "a"],
      ["b", "a"],
      ["b", "f"],
      ["b", "e"],
      ["a", "e"],
      ["d", "g"]
    ],
    false
  ],
  [
    ["a", "b", "c", "d", "e", "f"],
    [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]],
    ["e", "f", "a", "b", "d", "c"]
  ]
];

testArray.forEach(test => {
  const result = helper.buildOrder(test[0], test[1]);
  assertEqual(result, test[2]);
});
