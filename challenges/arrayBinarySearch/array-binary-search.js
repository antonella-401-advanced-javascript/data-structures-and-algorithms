const binarySearch = (arr, param) => {
  let index1 = 0;
  let lastIndex = arr.length - 1;
  let middle = Math.floor((index1 + lastIndex) / 2);

  while(arr[middle] !== param && index1 < lastIndex) {
    if(param < arr[middle]) {
      lastIndex = middle - 1;
    }
    else if(param > arr[middle]) {
      index1 = middle + 1;
    }
    middle = Math.floor((lastIndex + index1) / 2);
  }
  return (arr[middle] !== param) ? -1 : middle;
};

module.exports = {
  binarySearch
};