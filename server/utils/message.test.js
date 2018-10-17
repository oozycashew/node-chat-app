var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'ray';
    var text = 'This is a test message';
    var result = generateMessage(from, text);

    expect(result).toMatchObject({from, text});
    expect(typeof result.createdAt).toBe('number');
  });
});
