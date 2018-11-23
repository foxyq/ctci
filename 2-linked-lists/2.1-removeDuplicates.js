const helper = require("./2.0-helper");

const a = new helper.LinkedList("a");
const b = new helper.LinkedList("a");
const c = new helper.LinkedList("a");
const d = new helper.LinkedList("d");
const e = new helper.LinkedList("e");

a.next = c;
b.next = e;
c.next = b;
e.next = d;

helper.printList(a);
helper.removeDuplicates(a);
helper.printList(a);

const f = new helper.LinkedList("f");
const g = new helper.LinkedList("g");
const h = new helper.LinkedList("g");
const i = new helper.LinkedList("g");
const j = new helper.LinkedList("g");

f.next = g;
g.next = h;
h.next = i;
i.next = j;

helper.printList(f);
helper.removeDuplicates(f);
helper.printList(f);

const k = new helper.LinkedList("g");
const l = new helper.LinkedList("g");
const m = new helper.LinkedList("g");
const n = new helper.LinkedList("b");
const o = new helper.LinkedList("g");

k.next = l;
l.next = m;
m.next = n;
n.next = o;

helper.printList(k);
helper.removeDuplicates(k);
helper.printList(k);
