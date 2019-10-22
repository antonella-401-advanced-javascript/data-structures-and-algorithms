const add = require('./date-adder');

describe('Date Addder', () => {
  it('adds seconds to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '10s')).toBe(testDate + 10000);
  });
});