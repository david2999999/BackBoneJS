// trigger can pass multiple arguments to the callback function

let ourObject = {};

_.extend(ourObject, Backbone.Events);

function doAction (action, duration) {
    console.log("We are " + action + ' for ' + duration );
}

// Add event listeners
ourObject.on("dance", doAction);
ourObject.on("jump", doAction);
ourObject.on("skip", doAction);

// Passing multiple arguments to single event
ourObject.trigger("dance", 'dancing', "5 minutes");

// Passing multiple arguments to multiple events
ourObject.trigger("dance jump skip", 'on fire', "15 minutes");
