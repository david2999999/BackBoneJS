var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'https://image.flaticon.com/icons/png/128/171/171322.png',
        title: 'No Title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },

    /*Simply copy the value of _id to the needed id attribute. If you reload the page,
    you will see that models are actually deleted on the server when you press the
    delete button.*/
    parse: function( response ) {
        response.id = response._id;
        return response;
    }
});


