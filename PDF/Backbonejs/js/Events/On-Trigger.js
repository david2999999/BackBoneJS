// on(), off(), and trigger() Backbone.Events can give any object the ability
// to bind and trigger custom events. We can mix this module into any object easily
// and there isn’t a requirement for events to be declared before being bound to a
// callback handler.

//'on' being analogous to 'subscribe' and 'trigger' being similar to 'publish'
let ourObject = {};

_.extend(ourObject, Backbone.Events);

// Add a custom event
ourObject.on('dance', function(msg){
    console.log('We triggered ' + msg);
});

// Trigger the custom event and also pass the message "our event"
ourObject.trigger('dance', 'our event');