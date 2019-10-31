const mergeSort = require('./merge-sort');

describe('Merge sort', () => {
  it('sorts array given', () => {
    const arr = [27, 9, 1995];

    expect(mergeSort(arr)).toEqual([9, 27, 1995]);
  });
});