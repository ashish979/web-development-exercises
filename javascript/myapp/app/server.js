var http = require('http');
var url = require('url');

var converter = require('./converter');

var server = http.createServer((req, res) => {
  // http://localhost:3000/rgbToHex?red=255&green=100&blue=120
  // http://localhost:3000/hexToRgb?hex=ffa200

  var parsedUrl = url.parse(req.url, true);
  var pathname = parsedUrl.pathname.substring(1); //==> hexToRgb
  var query = parsedUrl.query;

  if(pathname == 'hexToRgb') {
    var result = converter.hexToRgb(query.hex);
    res.write(result.toString());
    res.end();
  } else {
    var result  = converter.rgbToHex(parseInt(query.red), parseInt(query.green), parseInt(query.blue));
    res.end(result);
  }

});

server.listen(3000, () => {
  console.log("server started http://localhost:3000/");
});