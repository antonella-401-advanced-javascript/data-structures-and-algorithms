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
  let k = 0;

  while(1 < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    }
    else {
      arr[k] = right[j];
    }
    k = k + 1;
  }

  if(i === left.length) {
    while(i < right.length) {
      arr[k] = right[j];
      k = k + 1;
      i = i + 1;
    }
  }
  else {
    while(i < left.length) {
      arr[k] = left[i];
      k = k + 1;
      i = i + 1;
    }
  }
  return arr;
};