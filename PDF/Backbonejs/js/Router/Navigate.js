//If you would like to update the URL to reflect the application state at a particular
// point, you can use the router’s .navigate() method. By default, it simply
// updates your URL fragment without triggering the hashchange event

// Let's imagine we would like a specific fragment (edit) once a user opens a single todo
let TodoRouter = Backbone.Router.extend({
    routes: {
        "todo/:id": "viewTodo",
        "todo/:id/edit": "editTodo"
        // ... other routes
    },

    viewTodo: function(id){
        console.log("View todo requested.");
        this.navigate("todo/" + id + '/edit'); // updates the fragment for us, but doesn't trigger
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
// but editTodo() function is not invoked even though location we end up is mapped to it.
//
// logs: View todo requested.