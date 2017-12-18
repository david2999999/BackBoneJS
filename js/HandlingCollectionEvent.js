var Song = Backbone.Model.extend();                         // Create a model called Song

var Songs = Backbone.Collection.extend({                    // Create a Collection with the model as Song
   model: Song
});

var SongView = Backbone.View.extend({                       // Create view for each Model
   tagName:  "li",

    render: function(){
       this.$el.html(this.model.get("title"));              // The label will be the title of the song
       this.$el.attr("id", this.model.id);                  // adds an id attribute to each <li>

       return this;
    }
});

var SongsView = Backbone.View.extend({                      // Create views for the whole collection
   tagName: "ul",

   initialize: function(){                                  // Listeners for add and remove from collection
       this.model.on("add", this.onSongAdded, this);
       this.model.on("remove", this.onSongRemove, this);
   },
    
    onSongAdded: function (song) {                          // if the song is added to collection
        var songView = new SongView({model: song});
        this.$el.append(songView.render().$el);             // add it to the end of the <ul>
    },

    onSongRemove: function (song) {                         // if the song is removed from the collection
        //this.$el.find("li#" + song.id).remove();

        this.$("li#" + song.id).remove();                   // remove it from the <ul>
    },
    
    render: function () {                                   // render each item in the collection onto html
        var self = this;

        this.model.each(function (song) {
           var songView = new SongView({model : song});
           self.$el.append(songView.render().$el);          // "self" means the view. not the song
        });
    }
});

var songs = new Songs([
    new Song({id : 1, title: "Song 1"}) ,
    new Song({id : 2, title: "Song 2"}),
    new Song({id : 3, title: "Song 3"})
]);

var songsView = new SongsView({el: "#container", model: songs});    // create the view for the collection
songsView.render();