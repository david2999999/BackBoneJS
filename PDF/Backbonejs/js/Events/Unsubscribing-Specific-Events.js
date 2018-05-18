// to remove a specific callback, we can pass that callback as the second parameter

let ourObject = {};

_.extend(ourObject, Backbone.Events);

function dancing (msg) {
    console.log("We are dancing. " + msg);
}
function jumping (msg) {
    console.log("We are jumping. " + msg);
}

// Add two listeners to the same event
ourObject.on("move", dancing);
ourObject.on("move", jumping);

// Trigger the events. Both listeners are called.
ourObject.trigger("move", "Yeah!");

// Removes specified listener
ourObject.off("move", dancing);

// Trigger the events again. One listener left.
ourObject.trigger("move", "Yeah, jump, jump!");