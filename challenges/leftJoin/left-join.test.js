const leftJoin = require('./left-join');
const HashTable = require('../hashtable/hashtable');

describe('left join', () => {
  it('adds additional values that have same key as first hash table', () => {
    const tableOne = new HashTable();
    tableOne.add('antonella', 'testing');
    tableOne.add('test', 'vfjnfnjv');
    const tableTwo = new HashTable();
    tableTwo.add('antonella', 'what');
    tableTwo.add('second', 'test2');

    expect(leftJoin(tableOne, tableTwo)).toEqual();
  });
});