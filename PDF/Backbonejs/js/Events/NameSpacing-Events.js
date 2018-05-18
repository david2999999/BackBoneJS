//The official Backbone.js documentation recommends namespacing event names
// using colons if you end up using quite a few of these on your page.

let ourObject = {};
// Mixin

_.extend(ourObject, Backbone.Events);

function dancing (msg) {
    console.log("We started " + msg);
}
// Add namespaced custom events
ourObject.on("dance:tap", dancing);
ourObject.on("dance:break", dancing);

// Trigger the custom events
ourObject.trigger("dance:tap", "tap dancing. Yeah!");
ourObject.trigger("dance:break", "break dancing. Yeah!");

// This one triggers nothing as no listener listens for it
ourObject.trigger("dance", "break dancing. Yeah!");