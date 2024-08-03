const express = require( 'express' );

const app = express();
const port = 3000;

app.get( '/', ( req, res ) => {
    res.send( "hello karan" );
} );

app.listen( port, () => {
    console.log( ` server listing on port  http://localhost:${ port }/` );

} );
