// off removes callback functions that were previously bound to an object. Going
// back to our Publish/Subscribe comparison, think of it as an unsubscribe for
// custom events.

let ourObject = {};

_.extend(ourObject, Backbone.Events);

function dancing (msg) {
    console.log("We " + msg);
}

// Add namespaced custom events
ourObject.on("dance:tap", dancing);
ourObject.on("dance:break", dancing);

// Trigger the custom events. Each will be caught and acted upon.
ourObject.trigger("dance:tap", "started tap dancing. Yeah!");
ourObject.trigger("dance:break", "started break dancing. Yeah!");

// Removes event bound to the object
ourObject.off("dance:tap");

// Trigger the custom events again, but one is logged.
ourObject.trigger("dance:tap", "stopped tap dancing."); // won't be logged as it's not listened
ourObject.trigger("dance:break", "break dancing. Yeah!");