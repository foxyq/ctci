"use strict";

module.exports = {
  LinkedList,
  Node,
  sumLists,
  compareLists,
  compareNodes,
  assertEqual,
  findIntersection
};

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value = null, next = null) {
  this.value = value;
  this.next = next;
}

const isListEmpty = start => {
  return start === null || start.next === null;
};

function compareLists(l1, l2) {
  if (!l1 || !l2) return false;
  if (l1.length !== l2.length) return false;

  let n1 = l1.head;
  let n2 = l2.head;

  while (n1 !== null && n2 !== null) {
    if (n1.value !== n2.value) return false;

    n1 = n1.next;
    n2 = n2.next;
  }

  return n1 === null && n2 === null;
}

function compareNodes(n1, n2) {
  return n1.value === n2.value && n1.next === n2.next;
}

function sumLists(l1, l2) {
  if (l1.head.value === null && l2.head.value === null) {
    return 0;
  }

  let p1 = l1.head;
  let p2 = l2.head;
  let carry = 0;

  const sumList = new LinkedList();

  const l1len = l1.length();
  const l2len = l2.length();

  if (l1len !== l2len) {
    const longer = l1len > l2len ? l1 : l2;
    const shorter = l1len < l2len ? l1 : l2;

    let counter = 0;
    const diff = longer.length() - shorter.length();

    while (counter !== diff) {
      shorter.pushToTail(0);
      counter++;
    }

    return sumLists(shorter, longer);
  } else {
    //standard case

    while (p1 !== null) {
      const addition = (p1.value + p2.value + carry) % 10;
      carry = p1.value + p2.value + carry >= 10 ? 1 : 0;
      sumList.pushToTail(addition);

      p1 = p1.next;
      p2 = p2.next;
    }

    if (carry !== 0) {
      sumList.pushToTail(carry);
    }
  }

  return sumList;
}

function findIntersection(l1, l2) {
  if (l1.tail !== l2.tail) {
    return null;
  }

  let p1 = l1.head;
  let p2 = l2.head;

  let longer = "";
  let shorter = "";

  if (l1.length() !== l2.length()) {
    longer = l1.length() > l2.length() ? l1 : l2;
    shorter = l1.length() < l2.length() ? l1 : l2;

    p1 = longer.head;
    p2 = shorter.head;

    const diff = longer.length() - shorter.length();
    let counter = 1;

    while (counter <= diff) {
      p1 = p1.next;
      counter++;
    }
  }

  // lists are the "same length" now thatnks to moved pointer p1
  while (p1 !== null) {
    if (p1.value === p2.value && p1.next === p2.next) {
      return p1;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return null;
}

function assertEqual(actual = 0, expected = 0, testName = "test") {
  if (actual === expected) {
    console.log("PASSED");
  } else {
    console.log(
      `FAILED [${testName}] Expected ${expected} , but got ${actual}`
    );
  }
}

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

  if (isListEmpty(start) || k < 1) {
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
  if (!deleteMe) return;

  let current = deleteMe;
  let prev = current;

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

  while (current !== null) {
    if (current.value < value) {
      lowerList.pushToTail(current.value);
    } else {
      higherList.pushToTail(current.value);
    }

    current = current.next;
  }

  if (lowerList.tail) {
    lowerList.tail.next = higherList.head;

    return lowerList;
  } else {
    return higherList;
  }
};

LinkedList.prototype.length = function() {
  let node = this.head;
  let length = 0;

  while (node !== null) {
    length++;
    node = node.next;
  }

  return length;
};

LinkedList.prototype.isPalindrome = function() {
  const length = this.length();

  if (length <= 1) {
    return true;
  }

  let node = this.head;

  const stack = [];

  let counter = 1;
  let even = false;

  const half = length / 2;
  const flooredHalf = Math.floor(length / 2);

  if (half === flooredHalf) {
    even = true;
  }

  while (node !== null) {
    if (counter <= half) {
      stack.push(node.value);
    } else {
      if (!even) {
        // the middle element of odd list gets skipped here
        even = true;
      } else {
        // const topOfStack = stack.pop()
        if (stack.pop() !== node.value) {
          return false;
        }
      }
    }
    counter++;
    node = node.next;
  }

  return true;
};

LinkedList.prototype.isCycle = function() {
  let slow = this.head;
  let fast = this.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return slow;
  }

  return null;
};

LinkedList.prototype.findCycleStart = function() {
  let meetingPoint = this.isCycle();
  let node = this.head;

  if (!meetingPoint) return null;

  while (node !== meetingPoint) {
    node = node.next;
    meetingPoint = meetingPoint.next;
  }

  return node;
};
