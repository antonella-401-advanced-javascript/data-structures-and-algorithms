const repeat = require('./repeated-word');

describe('repeat function', () => {
  it('returns first word that repeats in a string', () => {
    const testStr = 'Once upon a time, there was a brave princess who...';

    expect(repeat(testStr)).toEqual('a');
  });
});