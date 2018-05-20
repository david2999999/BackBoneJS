var app = app || {};

var Workspace = Backbone.Router.extend({
    //Our router uses a *splat to set up a default route which passes the string after
    // ‘#/’ in the URL to setFilter() which sets app.TodoFilter to that string.
    routes: {
        '*filter':'setFilter'
    },

    setFilter: function (param) {
        if(param){
            param = param.trim();
        }

        app.TodoFilter = param || '';

        // Trigger a collection filter event, causing hiding/unhiding
        // of Todo view items
        app.Todos.trigger('filter');
    }
});

app.TodoRouter = new Workspace();
Backbone.history.start();