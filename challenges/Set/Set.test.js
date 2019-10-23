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
});