const { LinkedList } = require('./linked-list');

describe('Linked list', () => {
  it('starts empty list', () => {
    const newList = new LinkedList();
    const checking = {
      head: null,
      size: 0
    };
    expect(newList).toEqual(checking);
  });

  it('inserts node', () => {
    const val = 'testing1';
    const testList = new LinkedList();
    testList.insert(val);
    
    expect(testList.size).toBe(1);
  });

  it('will return true if the value exists', () => {
    const test = 'test';
    const testList = new LinkedList();
    
    testList.insert(test);
    expect(testList.includes(test)).toBe(true);
  });
});