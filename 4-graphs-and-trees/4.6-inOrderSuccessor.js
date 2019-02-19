const helper = require("./4.0-helper");

const tree = new helper.BST(9);

tree.insert(1);
tree.insert(5);
tree.insert(4);
tree.insert(2);
tree.insert(65);
tree.insert(23);
tree.insert(36);
tree.insert(13);
tree.insert(54);
tree.insert(44);

tree.printLevelOrder();
console.log("***");

const testArr = [
  [tree.left, 2], // 1 -> 2
  [tree.left.right, 9], // 5 -> 9
  [tree.right.left.left, 23], // 13 -> 23
  [tree.right.left, 36], // 23 -> 36
  [tree.right.left.right, 44], // 36 -> 44
  [tree.right.left.right.right.left, 54], // 44 -> 54
  [tree.right.left.right.right, 65], // 54 -> 65
  [tree.right, null] //  65 -> null
];

testArr.forEach(test => {
  const result = helper.inOrderSuccessor(tree, test[0]);

  if (result) {
    console.log(result.value + " = " + test[1]);
  } else {
    console.error(result + " = " + test[1]);
  }
});
