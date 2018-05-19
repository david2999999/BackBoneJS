var app = app || {};

let TodoList = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: app.Todo,

    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    // Filter down the list of all todo items that are finished.
    completed: function() {
        return this.filter(function( todo ) {
            return todo.get('completed');
        });
    },

    // Filter down the list to only todo items that are still not finished.
    // the method this.done() returns an array, but uses the context of the collection
    // and passes in a series of values to be ignored via the without method.
    // Which in turn returns all todos that aren't done within the collection
    remaining: function() {
        return this.without.apply( this, this.completed() );
    },

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
        if ( !this.length ) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function( todo ) {
        return todo.get('order');
    }
});

// Create our global collection of **Todos**.
app.Todos = new TodoList();