/**
 * 
 * @param {array} sample
 * @returns {array}
 */

const sample = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  for(let i = 0; i <= (arr.length / 2); i++) {
    let newArr = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = newArr;
  }
  return arr;
}
reverseArray(sample);