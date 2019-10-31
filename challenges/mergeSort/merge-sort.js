const mergeSort = (arr) => {
  const n = arr.length;

  if(n > 1) {
    const mid = n / 2;
    const left = arr[0, mid];
    const right = arr[mid, n];
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
};