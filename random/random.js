let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  },
];

console.log(
  data.reduce(
    (acc, next) => (next.country !== 'China' ? acc + next.pop : acc),
    0,
  ),
);

const items = [
  { color: 'black', type: 'phone', age: 20 },
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'tv', age: 20 },
];

const excludes = [{ k: 'type', v: 'tv' }, { k: 'color', v: 'silver' }];

let ex = {};

excludes.forEach(pair => {
  ex[pair.k] = pair.v;
});

const filtered = items.filter(item => {
  for (key in ex) {
    return !(ex[key] === item[key]);
  }
});

console.log(filtered);
