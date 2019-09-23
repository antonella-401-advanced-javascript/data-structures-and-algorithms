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

  it('inserts  multiple nodes', () => {
    const val = 'testing1';
    const val2 = 9;
    const testList = new LinkedList();
    testList.insert(val);
    testList.insert(val2);
    
    expect(testList.size).toBe(2);
  });

  it('will return true if the value exists', () => {
    const test = 'test';
    const testList = new LinkedList();

    testList.insert(test);
    expect(testList.includes(test)).toBe(true);
  });

  it('will return false if no value found', () => {
    const invalid = 'potato';
    const testList = new LinkedList();

    expect(testList.includes(invalid)).toBe(false);
  });

  it('returns all values', () => {
    const testList = new LinkedList();
    const val = 'test';
    const val2 = 'test 2';
    const val3 = 23;
    testList.insert(val);
    testList.insert(val2);
    testList.insert(val3);

    expect(testList.toString()).toBe('test, test 2, 23');
  });
});