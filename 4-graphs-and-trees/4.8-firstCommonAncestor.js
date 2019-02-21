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

const getParentList = (tree, node) => {
  const list = [];

  let currNode = node;
  let parent = null;

  while (parent !== tree) {
    parent = helper.getParent(currNode, tree);
    // console.log(parent);
    list.push(parent);
    currNode = parent;
  }

  console.log("***");
  list.forEach(node => {
    console.log(node.value);
  });
};

getParentList(tree, tree.left.right);
