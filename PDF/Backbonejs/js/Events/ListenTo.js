// listenTo() tells an object to listen for events on
// another object, allowing the listener to keep track of the events for which it is
// listening.

let a = _.extend({}, Backbone.Events);
let b = _.extend({}, Backbone.Events);
let c = _.extend({}, Backbone.Events);

// add listeners to A for events on B and C
a.listenTo(b, 'anything', function(event){ console.log("anything happened"); });
a.listenTo(c, 'everything', function(event){ console.log("everything happened"); });

// trigger an event
b.trigger('anything'); // logs: anything happened

// stop listening
// stopListening() can also be used to selectively stop listening based on the
// event, model, or callback handler.
a.stopListening();

// A does not receive these events
b.trigger('anything');
c.trigger('everything');

