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
    const testList = new LinkedList();
    const val = 'testing1';
    testList.insert(val);
    
    expect(testList.size).toBe(1);
  });

  it('inserts  multiple nodes', () => {
    const testList = new LinkedList();
    const val = 'testing1';
    const val2 = 9;
    testList.insert(val);
    testList.insert(val2);
    
    expect(testList.size).toBe(2);
  });

  it('will point the first node as head property', () => {
    const testList = new LinkedList();
    const val = 'head';
    testList.insert(val);

    expect(testList.head.value).toBe(val);
  });

  it('will return true if the value exists', () => {
    const testList = new LinkedList();
    const test = 'test';

    testList.insert(test);
    expect(testList.includes(test)).toBe(true);
  });

  it('will return false if no value found', () => {
    const testList = new LinkedList();
    const invalid = 'potato';

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

  it('Adds a new node with the given value to the end of the list', () => {
    const testList = new LinkedList();
    const tail = 5;
    testList.append(1);
    testList.append(3);
    testList.append(2);
    testList.append(tail);

    expect(testList.toString()).toEqual('1, 3, 2, 5');
  });

  it('Add a new node with the given newValue immediately before the first value node', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(2);
    testList.append(4);

    testList.insertBefore(3, 2);

    expect(testList.toString()).toEqual('1, 2, 3, 2, 4');
  });

  it('Add a new node with the given newValue immediately after the first value node', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(3);
    testList.insert(2);
    testList.insertAfter(3, 7);
    expect(testList.toString()).toEqual('1, 3, 7, 2');
  });

  it('gets kth from end', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(testList.kthFromEnd(testList, 2)).toBe(3);
  });

  it('Where k is greater than the length of the linked list', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(() => testList.kthFromEnd(testList, 6)).toThrowError('input is too big');
  });

  it('Where k and the length of the list are the same', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(() => testList.kthFromEnd(testList, 5)).toThrowError('input cannot be the same length as list');
  });
  
  it('Where k is not a positive integer', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);
    
    expect(() => testList.kthFromEnd(testList, -1)).toThrowError('input is way too small');
  });

  it('here the linked list is of a size 1', () => {
    const testList = new LinkedList();
    testList.insert(1);

    expect(() => testList.kthFromEnd(testList, 1)).toThrowError('make list longer');
  });
});