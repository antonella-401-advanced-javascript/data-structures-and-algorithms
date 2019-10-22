const add = require('./date-adder');

describe('Date Addder', () => {

  it('adds seconds to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '10s')).toBe(testDate + 10000);
  });

  it('adds minutes to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '5m')).toBe(testDate + 300000);
  });

  it('adds hours to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '1h')).toBe(testDate + 3600000);
  });

  it('adds days to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '1d')).toBe(testDate + 86400000);
  });

  it('adds weeks to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '1w')).toBe(testDate + 604800000);
  });

  it('adds months to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '1M')).toBe(testDate + 18410112000);
  });
  
  it('adds seconds to date', () => {
    const testDate = Date.now();
    expect(add(testDate, '1y')).toBe(testDate + 220921344000);
  });
});