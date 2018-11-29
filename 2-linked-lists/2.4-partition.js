const helper = require("./2.0-helper");

const list1 = new helper.LinkedList();

list1.addToHead(3);
list1.pushToTail(8);
list1.pushToTail(12);
list1.pushToTail(25);
list1.pushToTail(43);
list1.pushToTail(5);
list1.pushToTail(47);
list1.pushToTail(11);
list1.addToHead(6666);
list1.addToHead(4444);
list1.pushToTail(7);

const list1result12 = new helper.LinkedList();

list1result12.pushToTail(3);
list1result12.pushToTail(8);
list1result12.pushToTail(5);
list1result12.pushToTail(11);
list1result12.pushToTail(7);
list1result12.pushToTail(4444);
list1result12.pushToTail(6666);
list1result12.pushToTail(12);
list1result12.pushToTail(25);
list1result12.pushToTail(43);
list1result12.pushToTail(47);

const list1result7 = new helper.LinkedList();

list1result7.pushToTail(3);
list1result7.pushToTail(5);
list1result7.pushToTail(4444);
list1result7.pushToTail(6666);
list1result7.pushToTail(8);
list1result7.pushToTail(12);
list1result7.pushToTail(25);
list1result7.pushToTail(43);
list1result7.pushToTail(47);
list1result7.pushToTail(11);
list1result7.pushToTail(7);

const list2 = new helper.LinkedList();

list2.pushToTail(9);
list2.pushToTail(8);
list2.pushToTail(2);
list2.pushToTail(1);
list2.pushToTail(3);

const list2result5 = new helper.LinkedList();

list2result5.pushToTail(2);
list2result5.pushToTail(1);
list2result5.pushToTail(3);
list2result5.pushToTail(9);
list2result5.pushToTail(8);

const list2result1 = new helper.LinkedList();

list2result1.pushToTail(9);
list2result1.pushToTail(8);
list2result1.pushToTail(2);
list2result1.pushToTail(1);
list2result1.pushToTail(3);

const testArray = [
  [list1, 12, list1result12, true],
  [list1, 7, list1result7, true],
  [list1, 12, list2, false],
  [list1, 10, list1, false],
  [list2, 1, list2result1, true],
  [list2, 5, list2result5, true],
  [list2, 5, list2, false]
];

testArray.forEach(item => {
  helper.assertEqual(
    helper.compareLists(item[0].partition(item[1]), item[2]),
    item[3],
    `list is correctly partitioned by ${item[1]}`
  );
});
