const helper = require("./2.0-helper");

const list = new helper.LinkedList();

list.pushToTail("igor");
list.addToHead("2");
list.addToHead("1");
list.pushToTail("foxy");
list.addToHead("3");
list.pushToTail("123");
list.pushToTail("2222");
list.pushToTail("333");
list.pushToTail("565656");
list.pushToTail("4444");
list.pushToTail("6666");

list.printList(list.head);

console.log(list.findKthToLast(1));
