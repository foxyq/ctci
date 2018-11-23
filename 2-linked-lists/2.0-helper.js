module.exports = {
  LinkedList: function(value) {
    this.value = value;
    this.next = null;
  },

  printList: function(start) {
    let node = start;
    console.log("** list start **");

    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }

    console.log("** list end **");
  },

  removeDuplicates: function(start) {
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
  }
};
