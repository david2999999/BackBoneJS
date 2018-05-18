// Note that Backbone.Events is mixed into the Backbone object. Since Backbone
// is globally visible, it can be used as a simple event bus:

Backbone.on('event', function() {console.log('Handled Backbone event');});
Backbone.trigger('event'); // logs: Handled Backbone event