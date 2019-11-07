const leftJoin = require('./left-join');
const HashTable = require('../hashtable/hashtable');

describe('left join', () => {
  it('adds additional values that have same key as first hash table', () => {
    const tableOne = new HashTable();
    tableOne.add('fond', 'enamored');
    tableOne.add('diligent', 'employed');
    tableOne.add('guide', 'usher');
    tableOne.add('outfil', 'garb');
    const tableTwo = new HashTable();
    tableTwo.add('fond', 'averse');
    tableTwo.add('wrath', 'delight');
    tableTwo.add('diligent', 'idle');
    tableTwo.add('guide', 'follow');
    tableTwo.add('flow', 'jam');

    expect(leftJoin(tableOne, tableTwo)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', null],
      ['outfil', 'garb', null],
      ['diligent', 'employed', 'idle']
    ]);
  });
});