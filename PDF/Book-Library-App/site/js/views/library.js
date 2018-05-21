var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    /*Note that in the initialize function, we accept an array of data that we pass
    to the app.Library constructor. We’ll use this to populate our collection with
    some sample data so that we can see everything is working correctly.*/
    initialize: function (initialBooks) {
        this.collection = new app.Library(initialBooks);
        this.render();
    },

    render: function() {
        this.collection.each(function (item) {
            this.renderBook(item);
        }, this);
    },

    renderBook: function (item) {
        var bookView = new app.BookView({
            model: item
        });

        this.$el.append(bookView.render().el);
    }
});