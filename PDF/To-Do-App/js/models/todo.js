let app = app || {};

// First, a todo has two attributes:
// a title stores a todo item’s title and a completed status indicates if it’s complete.

app.Todo = Backbone.Model.extend({
    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});

// Second, the Todo model has a toggle() method through which a Todo item’s
// completion status can be set and simultaneously persisted.