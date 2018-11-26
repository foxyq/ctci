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

const isListEmpty = start => {
  return start === null || start.next === null;
};

LinkedList.prototype.printList = function() {
  let node = this.head;
  console.log("** list start **");

  while (node !== null) {
    console.log(node.value);
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

LinkedList.prototype.removeDuplicates = function() {
  const start = this.head;

  if (isListEmpty(start)) {
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

LinkedList.prototype.findKthToLast = function(k) {
  const start = this.head;

  if (isListEmpty(start)) {
    return null;
  }

  let pointerOffset = start;
  let counter = 1;

  while (counter <= k && pointerOffset !== null) {
    pointerOffset = pointerOffset.next;
    counter += 1;
  }

  // pointerOffset is set k steps from the start
  // resultPointer will be k steps from the end when pointerOffset is at the end
  let resultPointer = start;

  while (pointerOffset !== null) {
    resultPointer = resultPointer.next;
    pointerOffset = pointerOffset.next;
  }

  return resultPointer;
};

LinkedList.prototype.deleteNode = function(deleteMe) {
  let current = deleteMe;
  let prev;

  while (current.next !== null) {
    current.value = current.next.value;
    prev = current;
    current = current.next;
  }

  prev.next = null;
};

LinkedList.prototype.partition = function(value) {
  const lowerList = new LinkedList();
  const higherList = new LinkedList();

  let current = this.head;

  while (current.next !== null) {
    if (current.value < value) {
      lowerList.pushToTail(current.value);
    } else {
      higherList.pushToTail(current.value);
    }

    current = current.next;
  }

  lowerList.tail.next = higherList.head;

  lowerList.printList();
};
