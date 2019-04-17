const swap = (a, b) => {
  const tmp = a;
  a = b;
  b = tmp;
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // end, swap last pos with pivot to put it where it belongs
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};

const quicksort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivot = partition(arr, low, high);

    quicksort(arr, low, pivot - 1);
    quicksort(arr, pivot + 1, high);
  }
};

const arr = [80, 3, 2, 54, 22, 11, 34];
const arr1 = [7, 6, 4, 2, 1, 6, 8, 3];
const arr2 = [];
const arr3 = [3, 2, 1];

console.log(arr);
quicksort(arr);
console.log(arr);
console.log(arr1);
quicksort(arr1);
console.log(arr1);
console.log(arr2);
quicksort(arr2);
console.log(arr2);
console.log(arr3);
quicksort(arr3);
console.log(arr3);
