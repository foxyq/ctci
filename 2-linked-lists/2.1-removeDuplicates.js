const helper = require("./2.0-helper");

const list = new helper.LinkedList();

list.pushToTail("123");
list.pushToTail("123");
list.pushToTail("123");
list.pushToTail(666);
list.pushToTail("melisko");
list.pushToTail("laco");
list.pushToTail("melisko");
list.pushToTail("melisko");
list.pushToTail("melisko");

const list1 = new helper.LinkedList();

list1.pushToTail("123");
list1.pushToTail(666);
list1.pushToTail("melisko");
list1.pushToTail("laco");

const list2 = new helper.LinkedList();

list2.pushToTail(12);
list2.pushToTail(12);
list2.pushToTail(12);
list2.pushToTail(12);
list2.pushToTail(12);

const list2res = new helper.LinkedList();

list2res.pushToTail(12);

const list3 = new helper.LinkedList();

list3.pushToTail("123");
list3.pushToTail("sad");
list3.pushToTail("xzc");
list3.pushToTail(666);
list3.pushToTail("sds");
list3.pushToTail("xxxx");
list3.pushToTail("23");
list3.pushToTail("23");
list3.pushToTail("9");

const list3res = new helper.LinkedList();

list3res.pushToTail("123");
list3res.pushToTail("sad");
list3res.pushToTail("xzc");
list3res.pushToTail(666);
list3res.pushToTail("sds");
list3res.pushToTail("xxxx");
list3res.pushToTail("23");
list3res.pushToTail("9");

const testArray = [
  [list, list1, true],
  [list2, list2res, true],
  [list3, list3res, true],
  [list3, list2res, false],
  [list2, new helper.LinkedList(), false],
  [list2, list3res, false]
];

testArray.forEach(item => {
  item[0].removeDuplicates();

  helper.assertEqual(
    helper.compareLists(item[0], item[1]),
    item[2],
    "correctly removed duplicates"
  );
});
