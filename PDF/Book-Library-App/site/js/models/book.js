var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'https://image.flaticon.com/icons/png/128/171/171322.png',
        title: 'No Title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});


