var ZombieView = Backbone.View.extend({
    template: '#my-view-template',

    initialize: function() {
        // bind the model change to re-render this view
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        // This alert is going to demonstrate a problem
        alert('We`re rendering the view');
    }
});

/*If we create two instances of this view using the same variable name for both
instances, and then change a value in the model, how many times will we see
the alert box?*/

var Derick = new Person({
    firstName: 'Derick',
    lastName: 'Bailey',
    email: 'derick@example.com'
});

// create the first view instance
var zombieView = new ZombieView({
    model: Derick
});

// create a second view instance, re-using
// the same variable name to store it
zombieView = new ZombieView({
    model: Derick
});

Derick.set('email', 'derickbailey@example.com');

/*Since we’re re-using the same zombieView variable for both instances, the first
instance of the view will fall out of scope immediately after the second is created.
This allows the JavaScript garbage collector to come along and clean it up, which
should mean the first view instance is no longer active and no longer going to
respond to the model’s “change” event.
But when we run this code, we end up with the alert box showing up twice!*/

/*The problem is caused by the model event binding in the view’s initialize
method. Whenever we pass this.render as the callback method to the model’s
on event binding, the model itself is being given a direct reference to the view
instance. Since the model is now holding a reference to the view instance,
replacing the zombieView variable with a new view instance is not going to let
the original view fall out of scope. The model still has a reference, therefore the
view is still in scope.*/