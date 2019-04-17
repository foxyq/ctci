class LinkedList {
  constructor(head = null, ...tail) {
    this.head = head;
    this.tail = tail.length ? new LinkedList(...tail) : null;
  }
  add(item) {
    if (this.tail) {
      this.tail.add(item);
    } else {
      this.tail = new LinkedList(item);
    }
  }
  has(item) {
    if (this.head === item) {
      return true;
    }
    if (this.tail === null) {
      return false;
    }
    return this.tail.has(item);
  }
}

const l = new LinkedList();
const list = new LinkedList(1);

console.log(l);
console.log(list);

//console.log(list.has(6));
// list.add(6);
// console.log(list.has(6));

// console.log(l);
// console.log(list);
