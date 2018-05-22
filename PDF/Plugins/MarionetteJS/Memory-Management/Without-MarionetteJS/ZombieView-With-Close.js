var ZombieView = Backbone.View.extend({
    template: '#my-view-template',
    initialize: function() {
        // bind the model change to re-render this view
        this.listenTo(this.model, 'change', this.render);
    },

    close: function() {
        // unbind the events that this view is listening to
        this.stopListening();
    },

    render: function() {
        // This alert is going to demonstrate a problem
        alert('We`re rendering the view');
    }
});

var Jeremy = new Person({
    firstName: 'Jeremy',
    lastName: 'Ashkenas',
    email: 'jeremy@example.com'
});

// create the first view instance
var zombieView = new ZombieView({
    model: Jeremy
});
zombieView.close(); // double-tap the zombie

// create a second view instance, re-using
// the same variable name to store it
zombieView = new ZombieView({
    model: Jeremy
});

Jeremy.set('email', 'jeremyashkenas@example.com');

/*Now we only see one alert box when this code runs.*/