// function countTabs(line) {
//   let count = 0;
//   let lastPosition = 0;
//   while ((lastPosition = line.indexOf('\t', lastPosition)) !== -1) {
//     lastPosition += 1;
//     count += 1;
//   }

//   return count;
// }

// const fn = input => {
//   const formatted = input.split('\n');
//   const maxLengthOfLevel = [];
//   let maxLength = 0;

//   for (let line of formatted) {
//     const tabCount = countTabs(line);

//     const currLength = tabCount === 0 ? line.length : line.length + tabCount;

//     maxLengthOfLevel[tabCount] =
//       tabCount === 0 ? currLength : maxLengthOfLevel[tabCount - 1];

//     if (line.includes('.')) {
//       maxLength = Math.max(maxLength, maxLengthOfLevel[tabCount]);
//     }
//   }

//   return maxLength;
// };

// const input =
//   'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';

// console.log(fn(input));

// const input = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// // const input = [1, 2, 3, 2, 2];
// // [3,3,3,1,2,1,1,2,3,3,4]

// const maxDiff = arr => {
//   if (arr.length <= 2) return arr.length;

//   let firstNum = 0;
//   let secondNum = -1;
//   let max = 0;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[firstNum]) {
//       firstNum = i;
//       count++;
//     } else if (secondNum === -1 || arr[i] === arr[secondNum]) {
//       secondNum = i;
//       count++;
//     } else {
//       max = Math.max(count, max);
//       count = i - Math.min(secondNum, firstNum);
//       firstNum = i - 1;
//       secondNum = i;
//     }
//   }

//   console.log(Math.max(max, count));
// };

// maxDiff(input);

// const findTime = (man1, man2, duration) => {
//   const isLongEnough = (block, time) => {
//     return block[1] - block[0] >= time;
//   };
//   const overlapBlock = (block1, block2) => {
//     const start = Math.max(block1[0], block2[0]);
//     const end = Math.min(block1[1], block2[1]);

//     return end >= start ? [start, end] : -1;
//   };
//   const isResult = (block1, block2) => {
//     const overlap = overlapBlock(block1, block2);

//     if (overlap !== -1) {
//       return isLongEnough(overlap, duration) ? overlap : false;
//     }

//     return false;
//   };

//   const max1 = man1.length;
//   const max2 = man2.length;

//   let m1 = 0;
//   let m2 = 0;

//   while (m1 < max1 && m2 < max2) {
//     let block1 = man1[m1];
//     let block2 = man2[m2];

//     const overlap = isResult(block1, block2);

//     if (overlap) {
//       return overlap;
//     }

//     if (block1[1] >= block2[1]) {
//       m2++;
//     } else {
//       m1++;
//     }
//   }

//   return false;
// };

// const man1 = [[6, 8], [8, 9], [11, 15], [17, 24]];

// const man2 = [[4, 14], [14, 17], [17, 19], [19, 23]];

// console.log(findTime(man1, man2, 4));

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
var indices = [2, 3, 4, 0, 5, 1];
// returns: ["d", "f", "a", "b", "c", "e"]

const res = indices.map((item, index) => arr[indices.indexOf(index)]);

// arr[indices.indexOf(0)]

console.log(res);
