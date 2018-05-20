var app = app || {};

app.TodoView = Backbone.View.extend({
    //... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( $('#item-template').html() ),

    // The DOM events specific to an item.
    events: {
        'click .toggle': 'togglecompleted',
        'dblclick label': 'edit',
        'click .destroy': 'clear',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'visible', this.toggleVisible);
    },

    // Re-renders the titles of the todo item.
    render: function() {
        // pass in the data from the model into the view
        this.$el.html( this.template( this.model.attributes ) );

        // The save generates a change event on the model which is bound to our
        // TodoView’s render() method. We’ve added a statement in render()
        // which toggles the completed class on the element depending on the model’s
        // completed state. The associated CSS changes the color of the title text
        // and strikes a line through it when the todo is completed.
        this.$el.toggleClass('completed', this.model.get('completed'));
        this.toggleVisible();

        // set the input of the view to edit
        this.$input = this.$('.edit');
        return this;
    },

    // toggle the class based on its attributes
    toggleVisible: function () {
        this.$el.toggleClass('hidden', this.isHidden());
    },

    // Determines if item should be hidden
    isHidden : function () {
        var isCompleted = this.model.get('completed');
        return ( // hidden cases only
            (!isCompleted && app.TodoFilter === 'completed')
            || (isCompleted && app.TodoFilter === 'active')
        );
    },

    togglecompleted: function() {
        //toggle() toggles the completed status of the todo and calls save() on
        // the model.
        this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
        this.$el.addClass('editing');
        this.$input.focus();
    },


    close: function() {
        let value = this.$input.val().trim();
        if ( value ) {
            this.model.save({ title: value });
        }
        this.$el.removeClass('editing');
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function( e ) {
        if ( e.which === ENTER_KEY ) {
            this.close();
        }
    },

    //Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function() {
        this.model.destroy();
    }
});