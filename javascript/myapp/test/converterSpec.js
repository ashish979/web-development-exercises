var expect = require('chai').expect;
var converter = require('../app/converter.js');

describe('unit testing converter', () => {
  it('test hex to rgb', () => {
    var result = converter.hexToRgb('ff00ff');
    expect(result).to.be.deep.equal([255, 0, 255]);
  });

  it('test rgb to hex', () => {
    var result = converter.rgbToHex(255, 0, 0,);
    expect(result).to.be.equal('ff0000');
  });
});