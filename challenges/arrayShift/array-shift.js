const insertShiftArray = (arr, newElement) => {
  for(let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = newElement;
  return arr;
};

module.exports = {
  insertShiftArray
};