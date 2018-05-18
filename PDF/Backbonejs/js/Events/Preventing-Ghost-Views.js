// The default implementation of View.remove() makes a call to stopListening(),
// ensuring that any listeners bound using listenTo() are unbound before the
// view is destroyed

let view = new Backbone.View();
let b = _.extend({}, Backbone.Events);

view.listenTo(b, 'all', function(){
    console.log(true);
});
b.trigger('anything'); // logs: true

view.listenTo(b, 'all', function(){
    console.log(false);
});

view.remove(); // stopListening() implicitly called
b.trigger('anything'); // does not log anything