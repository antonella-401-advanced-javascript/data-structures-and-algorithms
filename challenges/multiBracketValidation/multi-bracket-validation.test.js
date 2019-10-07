const { multiBracketValidation } = require('./multi-bracket-validation');

describe('multi bracket validation', () => {
  it('returns true for valid inputs', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[sbsjdndknmkd]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{testing}[test test]')).toBeTruthy();
  });

  it('returns false for invalid inputs', () => {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
  
});