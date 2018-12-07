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

const arr = tree.listOfDepths();

arr.forEach(list => {
  list.printList();
});
