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

const list1a2 = new helper.LinkedList();

list1a2.addToHead(1);
list1a2.addToHead(0);
list1a2.addToHead(5);
list1a2.addToHead(7);
list1a2.addToHead(1);

const list3 = new helper.LinkedList();

list3.addToHead(2);
list3.addToHead(5);
list3.addToHead(3);

const list4 = new helper.LinkedList();

list4.addToHead(5);
list4.addToHead(1);

const list3a4 = new helper.LinkedList();

list3a4.addToHead(3);
list3a4.addToHead(0);
list3a4.addToHead(4);

const testArray = [
  [list1, list2, list1a2, true],
  [list1, list1a2, list2, false],
  [list2, list1a2, list1, false],
  [list3, list4, list3a4, true],
  [list3, list1a2, list1, false],
  [list4, list1a2, list1, false]
];

testArray.forEach(list => {
  helper.assertEqual(
    helper.compareLists(helper.sumLists(list[0], list[1]), list[2]),
    list[3],
    "sumLists comparison"
  );
});
