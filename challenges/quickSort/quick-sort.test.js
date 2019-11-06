const quickSort = require('./quick-sort');

describe('quick sort', () => {
  it('sorts array given', () => {
    const arr = [4, 3, 7, 1];
    const right = (arr.length - 1);
    const left = 0;

    expect(quickSort(arr, left, right)).toEqual([1, 3, 4, 7]);
  });
});