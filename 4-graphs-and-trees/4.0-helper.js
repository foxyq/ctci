"use strict";

const helper = require("../3-stacks-and-queues/3.0-helper");
const list = require("../2-linked-lists/2.0-helper");

module.exports = {
  Graph,
  BST,
  printTreeInOrder,
  getHeight
};

// *********** GRAPH ***********

function Graph() {
  this.nodes = {};
}

Graph.prototype.addNode = function(value) {
  if (this.nodes[value] !== undefined) {
    return "-- Node already exists --";
  }

  this.nodes[value] = {};
};

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] === undefined) {
    return "-- Node doesn't exist --";
  }
  // delete node itself
  delete this.nodes[node];

  // delete edges to it
  for (let each in this.nodes) {
    if (this.nodes[each][node] !== undefined) {
      delete this.nodes[each][node];
    }
  }
};

Graph.prototype.addEdge = function(from, to) {
  if (this.nodes[from] === undefined) {
    return "-- Node doesn't exist --";
  }
  if (this.nodes[from][to]) {
    return "-- Edge already exists --";
  }

  this.nodes[from][to] = true;
};

Graph.prototype.removeEdge = function(from, to) {
  if (this.nodes[from] === undefined || this.nodes[from][to] === undefined) {
    return "-- Edge doesn't exist --";
  }

  delete this.nodes[from][to];
};

// *********** BINARY SEARCH TREE ***********

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(num) {
  if (num < this.value) {
    if (this.left === null) {
      this.left = new BST(num);
    } else {
      this.left.insert(num);
    }
  } else {
    if (this.right === null) {
      this.right = new BST(num);
    } else {
      this.right.insert(num);
    }
  }
};

BST.prototype.printLevelOrder = function() {
  var level = [];
  var q = new helper.Queue();
  var nextq = new helper.Queue();
  var currNode;

  q.add(this);
  while (!q.isEmpty()) {
    currNode = q.remove();
    level.push(currNode.value);
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      console.log(level.join(","));
      level = [];
      q = nextq;
      nextq = new helper.Queue();
    }
  }
};

BST.prototype.listOfDepths = function() {
  if (!this.left && !this.right) return this.value;

  const depths = [];
  let levelList = new list.LinkedList();
  let q1 = new helper.Queue();
  let qNextLevel = new helper.Queue();

  q1.add(this);

  while (!q1.isEmpty()) {
    const node = q1.remove();

    levelList.pushToTail(node.value);

    if (node.left !== null) {
      qNextLevel.add(node.left);
    }
    if (node.right !== null) {
      qNextLevel.add(node.right);
    }

    if (q1.isEmpty()) {
      depths.push(levelList);
      levelList = new list.LinkedList();
      q1 = qNextLevel;
      qNextLevel = new helper.Queue();
    }
  }

  return depths;
};

BST.prototype.checkBalanced = function() {
  return getHeight(this) != Number.MIN_SAFE_INTEGER;
};

function getHeight(node) {
  if (node == null) return -1;

  const errorMin = Number.MIN_SAFE_INTEGER;

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  if (leftHeight == errorMin || rightHeight == errorMin) {
    return errorMin;
  }

  const heightDiff = Math.abs(leftHeight - rightHeight);

  if (heightDiff > 1) {
    return errorMin;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

function printTreeInOrder(node) {
  if (node) {
    printTreeInOrder(node.left);
    console.log(node.value);
    printTreeInOrder(node.right);
  }
}
