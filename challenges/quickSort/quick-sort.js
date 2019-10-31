const quickSort = (arr, left, right) =>  {
  if(left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
};

const partition = (arr, left, right) => {

};