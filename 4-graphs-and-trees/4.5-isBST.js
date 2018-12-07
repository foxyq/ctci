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

console.log(tree.checkBST(), true);

let a = new helper.BST(1);
let b = new helper.BST(5);
let c = new helper.BST(6);
let d = new helper.BST(8);
let e = new helper.BST(67);

a.left = b;
console.log(a.checkBST(), false);

a.left = null;
a.right = b;
b.left = c;
console.log(a.checkBST(), false);

b.left = null;
b.right = c;
console.log(a.checkBST(), true);

c.right = d;
console.log(a.checkBST(), true);

c.right = e;
console.log(a.checkBST(), true);

e.right = d;
console.log(a.checkBST(), false);

e.right = null;
e.left = d;
console.log(a.checkBST(), true);
