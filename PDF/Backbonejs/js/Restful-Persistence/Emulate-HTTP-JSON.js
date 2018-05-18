//The Backbone.sync method is an integral part of Backbone.js. It assumes a
// jQuery-like $.ajax() method, so HTTP parameters are organized based on
// jQuery’s API. Since some legacy servers may not support JSON-formatted requests
// and HTTP PUT and DELETE operations, Backbone can be configured
// to emulate these capabilities using the two configuration variables shown below
// with their default values:

Backbone.emulateHTTP = false; // set to true if server cannot handle HTTP PUT or HTTP DELETE
Backbone.emulateJSON = false; // set to true if server cannot handle application/json requests

// Create a new library collection
let Library = Backbone.Collection.extend({
    url : function() { return '/library'; }
});

// Define attributes for our model
let attrs = {
    title : "The Tempest",
    author : "Bill Shakespeare",
    length : 123
};

// Create a new Library instance
let library = new Library;

// Create a new instance of a model within our collection
// wait:true backbone will wait for a server response before creating or destroying your model,
// thereby adding or removing it from the collection only after it's verified that the resource
// has been saved or deleted.
library.create(attrs, {wait: false});

// retrieve the first model in the collection and Update with just emulateHTTP
library.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
    emulateHTTP: true
});

// Check the ajaxSettings being used for our request
console.log(this.ajaxSettings.url === '/library/2-the-tempest'); // true
console.log(this.ajaxSettings.type === 'POST'); // true
console.log(this.ajaxSettings.contentType === 'application/json'); // true

// Parse the data for the request to confirm it is as expected
let data = JSON.parse(this.ajaxSettings.data);
console.log(data.id === '2-the-tempest'); // true
console.log(data.author === 'Tim Shakespeare'); // true
console.log(data.length === 123); // true

// update using emulateJSON
library.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
    emulateJSON: true
});

console.log(this.ajaxSettings.url === '/library/2-the-tempest'); // true
console.log(this.ajaxSettings.type === 'PUT'); // true
console.log(this.ajaxSettings.contentType ==='application/x-www-form-urlencoded'); // true

let data = JSON.parse(this.ajaxSettings.data.model);
console.log(data.id === '2-the-tempest');
console.log(data.author ==='Tim Shakespeare');
console.log(data.length === 123);