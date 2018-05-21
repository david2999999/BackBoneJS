// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    bodyParser = require('body-parser'), //Parser for reading request body
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ), //MongoDB integration
    methodOverride = require('method-override'),
    errorHandler = require('express-error-handler');

//Create server
var app = express();

//Where to serve static content
app.use( express.static( path.join( application_root, 'site') ) );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start server
var port = 4711;

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

//Connect to database
mongoose.connect( 'mongodb://localhost/library_database' );

//Schemas
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

//Models
var BookModel = mongoose.model( 'Book', Book );

// Configure server

//parses request body and populates request.body
app.use(bodyParser() );

//checks request.body for HTTP method overrides
app.use(methodOverride() );

//perform route lookup based on url and HTTP method
// app.use( app.router );

//Where to serve static content
app.use( express.static( path.join( application_root, 'site') ) );

//Show all errors in development
app.use(errorHandler());


app.get( '/api', function( request, response ) {
    response.send( 'Library API is running' );
});

app.get( '/api/books', function( request, response ) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return response.send( books );
        } else {
            return console.log( err );
        }
    });
});

//Insert a new book
/*We start by creating a new BookModel, passing an object with title, author, and
releaseDate attributes. The data are collected from request.body. This means
that anyone calling this operation in the API needs to supply a JSON object
containing the title, author, and releaseDate attributes. Actually, the caller can
omit any or all attributes since we have not made any of them mandatory.*/
app.post( '/api/books', function( request, response ) {

    var book = new BookModel({
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate
    });

    return book.save( function( err ) {
        if( !err ) {
            console.log( 'created' );
            return response.send( book );
        } else {
            console.log( err );
        }
    });
});


//Get a single book by id
/*Here, we use colon notation (:id) to tell Express that this part of the route
is dynamic. We also use the findById function on BookModel to get a single.result.
 If you restart node, you can get a single book by adding the id previously
returned to the URL like this:*/
app.get( '/api/books/:id', function( request, response ) {
    return BookModel.findById( request.params.id, function( err, book ) {
        if( !err ) {
            return response.send( book );
        } else {
            return console.log( err );
        }
    });
});

//Update a book
/*This is a little larger than previous ones, but is also pretty straight forward – we
find a book by id, update its properties, save it, and send it back to the client.*/
app.put( '/api/books/:id', function( request, response ) {
    console.log( 'Updating book ' + request.body.title );
    return BookModel.findById( request.params.id, function( err, book ) {
        book.title = request.body.title;
        book.author = request.body.author;
        book.releaseDate = request.body.releaseDate;
        return book.save( function( err ) {
            if( !err ) {
                console.log( 'book updated' );
                return response.send( book );
            } else {
                console.log( err );
            }
        });
    });
});