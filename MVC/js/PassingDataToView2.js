var Song = Backbone.Model.extend();                                 // creating a Model for Song

var Songs = Backbone.Collection.extend({                            // a collection for the Songs
   model: Song
});

var SongView = Backbone.View.extend({                               // Creating a view for a single model
   tagName: "li",

   render: function(){
       this.$el.html(this.model.get("title"));

       return this;
   }
});

var SongsView = Backbone.View.extend({                              // Creating a View for the collection
   render: function () {
       var self = this;                                             // "Self" refers to the view

       this.model.each(function (song) {                            // Loop through the collection
           var songView = new SongView({model: song});              // creating a single view for each item in collection
           self.$el.append(songView.render().$el);                  // add the single views to the container
       });
   } 
});


var songs = new Songs([                                             // creating a collection of song
    new Song({ title: "Blue in Green"}),
    new Song({ title: "So What"}),
    new Song({ title: "All Blue"})
]);

var songsView = new SongsView({ el: "#container", model: songs});   // creating the View for the collection using the collection songs
songsView.render();                                                 // render the view