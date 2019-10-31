const quickSort = require('./quick-sort');

describe('quick sort', () => {
  it('sorts array given', () => {
    const arr = [4, 3, 7, 1];

    expect(quickSort(arr)).toEqual([]);
  });
});