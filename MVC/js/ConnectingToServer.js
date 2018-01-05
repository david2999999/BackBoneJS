var Songs = Backbone.Collection.extend({			// creating a collection with model Song
    model: Song
    url: "/api/songs"						        // url this collection will be in
});

var songs = new Songs();
songs.fetch();                                      // sends an http GET request to /api/songs

// =================================================

songs.fetch({							            // sends an http GET request to /api/songs?page=2
    data:{
        page: 2
    },
    success: function(){},
    error: function(){}
});
