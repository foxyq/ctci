const helper = require("./2.0-helper");

const list = new helper.LinkedList();

list.addToHead(3);
list.pushToTail(8);
list.pushToTail(12);
list.pushToTail(25);
list.pushToTail(43);
list.pushToTail(5);
list.pushToTail(47);
list.pushToTail(11);
list.addToHead(6666);
list.addToHead(4444);
list.pushToTail(7);

list.printList(list.head);
list.partition(12);
