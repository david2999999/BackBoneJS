var Song = Backbone.Model.extend({                  // Creating a model Song, its listeners initialize to 0
    defaults: {
        listeners: 0
    }
});


var SongView = Backbone.View.extend({               // creates a view for the song
   initialize: function(){
       this.model.on("change", this.render, this);  // every view will be re-rendered if any of its attributes changes
   },

    render: function(){                             // render the view onto the html
       this.$el.html(this.model.get("title") + " - listeners: " + this.model.get("listeners"));

       return this;
    }
});


var song = new Song({title: "Blue Sea"});           // creates a new song called blue sea

var songView = new SongView({el : "#container", model: song});  // puts the view onto the container
songView.render();