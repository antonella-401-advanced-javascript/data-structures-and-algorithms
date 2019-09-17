const { insertShiftArray } = require('./array-shift');

describe('array shift module', () => {
  let arr1 = [2, 4, 6, 8];
  let arr2 = [4, 8, 15, 23, 42];
  let newElement = 5;

  describe('performs shift of array given', () => {
    test('shift arr1', () => {
      expect(insertShiftArray(arr1, newElement)).toEqual([5, 2, 4, 6, 8]);
    });
    test('shift arr2', () => {
      expect(insertShiftArray(arr2, newElement)).toEqual([5, 4, 8, 15, 23, 42]);
    });
  });
});