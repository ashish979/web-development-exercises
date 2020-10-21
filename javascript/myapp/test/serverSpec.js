var expect = require('chai').expect; //assertion library
var request = require('request'); // used to make http request

// test suite
describe("testing server", () => {

  it("test RGB TO HEX pathname", (done) => {
    var uri = "http://localhost:3000/rgbToHex?red=255&green=100&blue=120";
    var expected = "ff6478";
    request(uri, (error, response, body) => {
      expect(expected).to.be.equal(body);
      done();
    });
  });

  it("test HEX to RGB pathname", (done) => {
    var uri = "http://localhost:3000/hexToRgb?hex=ffa200";
    var expected = "255,162,0";
    request(uri, (error, response, body) => {
      expect(expected).to.be.equal(body);
      done();
    });
  });
});