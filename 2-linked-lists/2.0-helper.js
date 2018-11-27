module.exports = {
  LinkedList: LinkedList,
  SumLists: sumLists,
  AssertEqual: assertEqual
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
  let node = this.head;
  const length = this.length();

  if (length <= 1) {
    return true;
  }

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
