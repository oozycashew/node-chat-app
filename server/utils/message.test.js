var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'ray';
    var text = 'This is a test message';
    var result = generateMessage(from, text);

    expect(result).toMatchObject({from, text});
    expect(typeof result.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'anisa';
    var latitude = 5;
    var longitude = 1;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var result = generateLocationMessage(from, latitude, longitude);

    expect(result).toMatchObject({from, url});
    expect(typeof result.createdAt).toBe('number');
  });
});
