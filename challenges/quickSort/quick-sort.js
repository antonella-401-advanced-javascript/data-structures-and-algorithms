const quickSort = (arr, left, right) =>  {
  if(left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
};

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;

  for(let i = left; i < right; i++) {
    if(arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
    swap(arr, right, low + 1);
    return low + 1;
  }
};