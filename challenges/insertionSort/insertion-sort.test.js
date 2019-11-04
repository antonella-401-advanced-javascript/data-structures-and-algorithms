const insertionSort = require('./insertion-sort');

describe('insertion sort', () => {
  it('sorts the array given', () => {
    const arr = [27, 9, 1995];

    expect(insertionSort(arr)).toEqual([9, 27, 1995]);
  });
});