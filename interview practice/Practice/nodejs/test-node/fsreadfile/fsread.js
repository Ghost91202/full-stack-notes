
// nodejs Readfile===========================================================

const http = require( 'http' );
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 8001;


const server = http.createServer( function (  req,res ) {
 fs.readFile('demohtml.mdx', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

} );

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});


fs.appendFile('demohtml.mdx', 'this is krn 2', function (err) {
  if (err) throw err;
  console.log('appendfile Saved!');
} );


fs.open('demohtml.mdx', 'w', function (err, file) {
  if (err) throw err;
  console.log('open Saved!');
});



fs.writeFile('demohtml.mdx', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('writefile Saved!');
});


// fs.unlink('demohtml.mdx', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
