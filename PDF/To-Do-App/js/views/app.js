var app = app || {};

app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#todoapp',

    // Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template( $('#stats-template').html() ),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
        'keypress #new-todo': 'createOnEnter',
        'click #clear-completed': 'clearCompleted',
        'click #toggle-all': 'toggleAllComplete'
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed.
    initialize: function() {
        this.allCheckbox = this.$('#toggle-all')[0];
        this.$input = this.$('#new-todo');
        this.$footer = this.$('#footer');
        this.$main = this.$('#main');

        // When an add event is fired the addOne() method is called and passed the
        // new model. addOne() creates an instance of TodoView view, renders it,
        // and appends the resulting element to our Todo list.
        this.listenTo(app.Todos, 'add', this.addOne);

        // When a reset event occurs (i.e., we update the collection in bulk as
        // happens when the Todos are loaded from Local Storage), addAll() is
        // called, which iterates over all of the Todos currently in our collection and
        // fires addOne() for each item.
        this.listenTo(app.Todos, 'reset', this.addAll);

        this.listenTo(app.Todos, 'change:completed', this.filterOne);
        this.listenTo(app.Todos,'filter', this.filterAll);
        this.listenTo(app.Todos, 'all', this.render);

        app.Todos.fetch();

    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
        let completed = app.Todos.completed().length;
        let remaining = app.Todos.remaining().length;

        if ( app.Todos.length ) {
            this.$main.show();
            this.$footer.show();

            // The footer is populated with the HTML produced by instantiating the
            // statsTemplate with the number of completed and remaining todo items
            this.$footer.html(this.statsTemplate({
                completed: completed,
                remaining: remaining
            }));

            this.$('#filters li a')
                .removeClass('selected')
                .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
                .addClass('selected');
        } else {
            this.$main.hide();
            this.$footer.hide();
        }

        // The allCheckbox is updated based on whether there are remaining todos.
        this.allCheckbox.checked = !remaining;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( todo ) {
        let view = new app.TodoView({ model: todo });
        $('#todo-list').append( view.render().el );
    },
    
    // Add all items in the **Todos** collection at once.
    addAll: function() {
        this.$('#todo-list').html('');
        app.Todos.each(this.addOne, this);
    },

    // We’ve bound a filterOne() callback on the Todos collection for a
    // change:completed event. This listens for changes to the completed
    // flag for any model in the collection. The affected todo is passed to the
    // callback which triggers a custom visible event on the model.
    filterOne : function (todo) {
        todo.trigger('visible');
    },

    // We’ve bound a filterAll() callback for a filter event, which works
    // a little similar to addOne() and addAll(). Its responsibility is to toggle
    // which todo items are visible based on the filter currently selected in the
    // UI (all, completed or remaining) via calls to filterOne().
    filterAll : function () {
        app.Todos.each(this.filterOne, this);
    },

    newAttributes: function() {
        return {
            title: this.$input.val().trim(),
            order: app.Todos.nextOrder(),
            completed: false
        };
    },

    //createOnEnter(): Creates a new Todo model and persists it in local-
    // Storage when a user hits enter inside the <input/> field. Also resets the
    // main <input/> field value to prepare it for the next entry. The model is
    // populated by newAttributes(), which returns an object literal composed
    // of the title, order, and completed state of the new item. Note that this
    // is referring to the view and not the DOM element since the callback was
    // bound using the events hash.
    createOnEnter: function( event ) {
        if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
            return;
        }
        app.Todos.create( this.newAttributes() );
        this.$input.val('');
    },

    ///Removes the items in the todo list that have been
    // marked as completed when the user clicks the clear-completed checkbox
    // (this checkbox will be in the footer populated by the #stats-template).
    clearCompleted: function() {
        _.invoke(app.Todos.completed(), 'destroy');
        return false;
    },

    // Allows a user to mark all of the items in the todo
    // list as completed by clicking the toggle-all checkbox.
    toggleAllComplete: function() {
        let completed = this.allCheckbox.checked;

        app.Todos.each(function( todo ) {
            todo.save({
                'completed': completed
            });
        });
    }



});