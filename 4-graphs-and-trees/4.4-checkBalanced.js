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
console.log(tree.checkBalanced(), true);

var b1 = new helper.BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(b1.checkBalanced(), false);

var b2 = new helper.BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(b2.checkBalanced(), true);
