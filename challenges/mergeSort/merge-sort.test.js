const mergeSort = require('./merge-sort');

describe('Merge sort', () => {
  it('sorts array given', () => {
    const arr = [3, 9, 4];

    expect(mergeSort(arr)).toEqual([3, 4, 9]);
  });
});