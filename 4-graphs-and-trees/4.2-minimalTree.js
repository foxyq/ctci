const h = require("./4.0-helper");
const Queue = require("../3-stacks-and-queues/3.0-helper");

const getMid = arr => {
  return Math.floor(arr.length / 2);
};

const createMinimalTree = (arr, tree) => {
  if (arr.length > 1) {
    const mid = getMid(arr);

    if (arr[mid] !== undefined) {
      tree.insert(arr[mid]);
    }

    createMinimalTree(arr.slice(0, mid), tree);
    createMinimalTree(arr.slice(mid + 1, arr.length), tree);
  } else {
    if (arr[0] !== undefined) {
      tree.insert(arr[0]);
    }
  }
};

const sortedArray = [
  1,
  5,
  7,
  42,
  666,
  2,
  423,
  4,
  67,
  534,
  6,
  457,
  356,
  74,
  34,
  3,
  123,
  12,
  23,
  21
].sort((a, b) => a - b);

let tree = new h.BST();

const arr1 = [1, 2, 4, 5, 6];
createMinimalTree(arr1, tree);
tree.printLevelOrder();

tree = new h.BST();
const arr2 = [1, 2, 3, 4, 5, 6, 7];
createMinimalTree(arr2, tree);
tree.printLevelOrder();

tree = new h.BST();
createMinimalTree(sortedArray, tree);
tree.printLevelOrder();
