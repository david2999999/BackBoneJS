//It is also possible for Router.navigate() to trigger the route along with updating
// the URL fragment by passing the trigger:true option.

// Note: This usage is discouraged. The recommended usage is the one described
// above which creates a bookmarkable URL when your application transitions to
// a specific state.

let TodoRouter = Backbone.Router.extend({
    routes: {
        "todo/:id": "viewTodo",
        "todo/:id/edit": "editTodo"
    // ... other routes
    },

    viewTodo: function(id){
        console.log("View todo requested.");
        this.navigate("todo/" + id + '/edit', {trigger: true}); // updates the fragment and triggers
    },

    editTodo: function(id) {
        console.log("Edit todo opened.");
    }
});

let myTodoRouter = new TodoRouter();
Backbone.history.start();

// Go to: http://localhost/#todo/4
//
// URL is updated to: http://localhost/#todo/4/edit
// and this time editTodo() function is invoked.
//
// logs:
// View todo requested.
// Edit todo opened.