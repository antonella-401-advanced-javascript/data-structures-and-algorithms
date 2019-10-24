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
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const intersection = setA.intersection(setB);

    expect(intersection.array).toEqual([1, 10]);
  });

  it('takes a set and returns a new Set with the union of those sets', () => {
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const union = setA.union(setB);

    expect(union.array).toEqual([2, 1, 10, 0]);
  });

  it('takes a set and returns a new Set with the union of those sets', () => {
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const diff = setA.difference(setB);

    expect(diff.array).toEqual([2, 0]);
  });

  it('takes two sets and returns a new Set with the intersection of those sets', () => {
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const sta = Set.staticIntersection(setA, setB);

    expect(sta.array).toEqual([1, 10]);
  });

  it(' takes two sets and returns a new Set with the union of those sets', () => {
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const sta = Set.staticUnion(setA, setB);

    expect(sta.array).toEqual([2, 1, 10, 0]);
  });

  it('takes two sets and returns a new Set with the difference of those sets', () => {
    const setA = new Set();
    setA.add(2);
    setA.add(1);
    setA.add(10);
    const setB = new Set();
    setB.add(1);
    setB.add(0);
    setB.add(10);
    const sta = Set.staticDifference(setA, setB);

    expect(sta.array).toEqual([2, 0]);
  });
});