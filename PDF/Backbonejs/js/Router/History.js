// Backbone.history as it handles
// hashchange events in our application. This will automatically handle routes
// that have been defined and trigger callbacks when they’ve been accessed.
// The Backbone.history.start() method will simply tell Backbone that it’s
// okay to begin monitoring all hashchange events as follows:

let TodoRouter = Backbone.Router.extend({
    /* define the route and function maps for this router */
    routes: {
        "about" : "showAbout",
        "search/:query" : "searchTodos",
        "search/:query/p:page" : "searchTodos"
    },

    showAbout: function(){},

    searchTodos: function(query, page) {
        let page_number = page || 1;
        console.log("Page number: " + page_number + " of the results for todos containing " + query);
    }
});

let myTodoRouter = new TodoRouter();
Backbone.history.start();

//http://localhost/#search/job/p3 logs: Page number: 3 of the results for todos containing
// http://localhost/#search/job logs: Page number: 1 of the results for todos containing 