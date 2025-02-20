var http = require('http');
var url = require('url');
var fs = require('fs');

const hostname = "127.0.0.1";
const port = 8001;


const server = http.createServer( function (  req,res ) {
 var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile("demo.txt", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

} );

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
