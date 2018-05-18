// A special all event is made available in case you would like notifications for
// every event that occurs on the object (e.g., if you would like to screen events in
// a single location).

let ourObject = {};

_.extend(ourObject, Backbone.Events);

ourObject.on("all", function(eventName){
    console.log("The name of the event passed was " + eventName);
});

// This time each event will be caught with a catch 'all' event listener
ourObject.trigger("dance:tap", "tap dancing. Yeah!");
ourObject.trigger("dance:break", "break dancing. Yeah!");
ourObject.trigger("dance", "break dancing. Yeah!");