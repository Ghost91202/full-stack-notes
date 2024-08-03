// const http =  require("http")

// const hostname = "127.0.0.1";
// const port = 8001;


// const server = http.createServer( function (  req,res ) {

//      res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();

// } );

// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// Split the Query String



// var http = require('http');
// var url = require('url');

// const hostname = "127.0.0.1";
// const port = 8001;

// const server = http.createServer( function ( req, res ) {
//   res.writeHead( 200, { 'Content-Type': 'text/html' } );
//   var q = url.parse( req.url, true ).query;
//   var txt = q.year + " " + q.month;
//   res.end( txt );
// } );

// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// nodejs Readfile===========================================================

const http = require( 'http' );
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 8001;


const server = http.createServer( function (  req,res ) {

     res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();

} );

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
