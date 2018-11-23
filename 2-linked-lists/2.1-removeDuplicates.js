const helper = require("./2.0-helper");

const list = new helper.LinkedList();

list.addToHead("123");
list.addToHead("123");
list.addToHead("123");
list.addToHead(666);

list.printList(list.head);
list.removeDuplicates(list.head);
list.printList(list.head);

list.pushToTail("melisko");
list.pushToTail("laco");
list.pushToTail("melisko");
list.pushToTail("melisko");
list.pushToTail("melisko");
list.printList(list.head);

list.removeDuplicates(list.head);
list.printList(list.head);
