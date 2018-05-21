var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template($('#bookTemplate').html()),

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    },

    events: {
        'click .delete' : 'deleteBook'
    },

    deleteBook: function () {
        // removing the model and the view
        this.model.destroy();
        this.remove();
    }
});