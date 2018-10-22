var expect = require('expect');

var {isRealString} = require('./validation');

describe('validation', () => {
  it('should reject non-string values', () => {
    var result = isRealString(1234);
    expect(result).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var result = isRealString('     ');
    expect(result).toBeFalsy();
  });

  it('should allow strings with non-space characters', () => {
    var result = isRealString('  should pass     ');
    expect(result).toBeTruthy();
  });
});
