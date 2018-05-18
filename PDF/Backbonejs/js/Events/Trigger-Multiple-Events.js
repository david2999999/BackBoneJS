// trigger triggers a callback for a specified event (or a space-separated list of events)

let ourObject = {};

_.extend(ourObject, Backbone.Events);

function doAction (msg) {
    console.log("We are " + msg);
}

// Add event listeners
ourObject.on("dance", doAction);
ourObject.on("jump", doAction);
ourObject.on("skip", doAction);

// Single event
ourObject.trigger("dance", 'just dancing.');

// Multiple events
ourObject.trigger("dance jump skip", 'very tired from so much action.');