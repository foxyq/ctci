module.exports = {
  LinkedList: LinkedList
};

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
}

LinkedList.prototype.printList = function(start) {
  let node = start;
  console.log("** list start **");

  while (node !== null) {
    console.log(node.value + " next -> " + node.next);
    node = node.next;
  }

  console.log("** list end **");
};

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head);
  if (!this.head) this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.pushToTail = function(value) {
  const newNode = new Node(value, null);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeDuplicates = function(start) {
  // no need to delete anything
  if (start === null || start.next === null) {
    return start;
  }

  let currentNode = start;
  let nextNode = start.next;
  let map = [];

  map[currentNode.value] = true;

  while (nextNode !== null) {
    const value = nextNode.value;

    if (map[value]) {
      currentNode.next = nextNode.next;
    } else {
      map[value] = true;
      currentNode = nextNode;
    }
    nextNode = nextNode.next;
  }

  this.tail = currentNode;
};
