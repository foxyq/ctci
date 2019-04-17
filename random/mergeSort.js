const merge = (left, mid, right) => {
  let leftHalf = [];
  for (let i = left; i <= mid; i++) {
    leftHalf.push(arr[i]);
  }

  let rightHalf = [];
  for (let i = mid + 1; i <= right; i++) {
    rightHalf.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let index = left;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      arr[index++] = leftHalf[i++];
    } else {
      arr[index++] = rightHalf[j++];
    }
  }

  if (i < leftHalf.length) {
    while (i < leftHalf.length) {
      arr[index++] = leftHalf[i++];
    }
  } else {
    while (j < rightHalf.length) {
      arr[index++] = rightHalf[j++];
    }
  }
};

const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if (arr.length <= 1) return arr;

  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);

    merge(l, mid, r);
  }

  return arr;
};

const arr = [6, 3, 1, 5, 2];

console.log(arr);
mergeSort(arr);
console.log(arr);
