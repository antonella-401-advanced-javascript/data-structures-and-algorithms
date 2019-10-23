const { Set } = require('./Set');

describe('Set class', () => {
  
  it('adds items to a set', () => {
    const testSet = new Set();
    testSet.add(1);
    testSet.add('test');

    expect(testSet.length).toBe(2);
  });

  it('removes a specific item', () => {
    const testSet = new Set();
    testSet.add(1);
    testSet.add('test');
    testSet.add('remove me');
    testSet.remove('remove me');

    expect(testSet.length).toBe(2);
    expect(testSet.has('remove me')).toBe(false);
  });

  it('checks if a specific value is in set', () => {
    const testSet = new Set();
    testSet.add(1);
    testSet.add('find me');
    testSet.add(4);
    testSet.add(10);

    expect(testSet.has('find me')).toBe(true);
    expect(testSet.has('not in set')).toBe(false);
  });

  it('takes a set returns a new Set with the intersection of those sets', () => {
    const setA = new Set([2, 1, 10]);
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set([1, 0, 10]);
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const intersection = setA.intersection(setB);

    expect(intersection.array).toEqual([1, 10]);
  });
});