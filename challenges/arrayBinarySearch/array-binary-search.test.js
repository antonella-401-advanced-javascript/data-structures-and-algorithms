const { binarySearch } = require('./array-binary-search');

describe('binary search of array', () => {
  const arr = [4, 8, 15, 16, 23, 42];
  const arr2 = [11, 22, 33, 44, 55, 66, 77];
  const param = 15;
  const param2 = 90;

  it('returns param index', () => {
    expect(binarySearch(arr, param)).toBe(2);
  });

  it('returns -1 if no param found in array', () => {
    expect(binarySearch(arr2, param2)).toBe(-1);
  });
});