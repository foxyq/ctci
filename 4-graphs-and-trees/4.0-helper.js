"use strict";

const helper = require("../3-stacks-and-queues/3.0-helper");
const list = require("../2-linked-lists/2.0-helper");

module.exports = {
  Graph,
  BST,
  printTreeInOrder,
  getHeight,
  isBST,
  inOrderSuccessor,
  buildOrder
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

BST.prototype.checkBST = function() {
  return isBST(this, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
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

function isBST(node, min, max) {
  if (!node) {
    return true;
  }

  if (node.value < min || node.value > max) {
    return false;
  }

  if (
    !isBST(node.left, min, node.value) ||
    !isBST(node.right, node.value, max)
  ) {
    return false;
  }

  return true;
}

function getLeftMostChild(node) {
  while (node.left) {
    node = node.left;
  }

  return node;
}

function getParent(node, start) {
  if (node && start) {
    if (start.left === node || start.right === node) {
      return start;
    } else {
      if (node.value < start.value) {
        return getParent(node, start.left);
      } else {
        return getParent(node, start.right);
      }
    }
  }
  return null;
}

function inOrderSuccessor(tree, node) {
  if (!node) {
    return null;
  }

  if (node.right !== null) {
    return getLeftMostChild(node.right);
  } else {
    let parent = getParent(node, tree);

    while (parent !== null) {
      if (node === parent.left) {
        return parent;
      }

      if (parent.value > node.value) {
        return parent;
      }

      parent = getParent(parent, tree);
    }
  }
  return null;
}

///////////// GRAPH BUILD ORDER 4.7 ///////

function buildOrder(projects, dependencies) {
  // create a graph
  const graph = buildOrderGraph(projects, dependencies);
  const order = [];

  let graphNodeList = Object.keys(graph.nodes);

  while (graphNodeList.length > 0) {
    let prevState = order.slice();
    let noDependencies = graphNodeList.slice();

    for (let node in graph.nodes) {
      Object.keys(graph.nodes[node]).forEach(key => {
        if (noDependencies.includes(key)) {
          noDependencies.splice(noDependencies.indexOf(key), 1);
        }
      });
    }

    noDependencies.forEach(node => {
      order.push(node);
      graph.removeNode(node);
      graphNodeList = Object.keys(graph.nodes);
    });

    if (order.length === prevState.length) {
      return false;
    }
  }

  return order;
}

const buildOrderGraph = (projects, dependencies) => {
  const graph = new Graph();

  projects.forEach(project => {
    graph.addNode(project);
  });

  dependencies.forEach(dep => {
    graph.addEdge(dep[0], dep[1]);
  });

  return graph;
};

// const tree = new BST(9);
// tree.insert(1);
// tree.insert(5);
// tree.insert(4);
// tree.insert(2);
// tree.insert(65);
// tree.insert(23);
// tree.insert(36);
// tree.insert(13);
// tree.insert(54);
// tree.insert(44);

// tree.printLevelOrder();
