const helper = require("./2.0-helper");

const list1 = new helper.LinkedList();

list1.addToHead(6);
list1.addToHead(1);
list1.addToHead(7);

const list2 = new helper.LinkedList();

list2.addToHead(9);
list2.addToHead(9);
list2.addToHead(5);
list2.addToHead(4);

list1.printList();
list2.printList();

const result = helper.SumLists(list1, list2);

result.printList();
