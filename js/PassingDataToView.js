var Song = Backbone.Model.extend();                             // Model for Song

var SongView = Backbone.View.extend({                           // Creating view for a single model
   render: function(){
       this.$el.html(this.model.get("title"));

       return this;                                             // returning "this" can be used for method chaining
   }
});


var song = new Song({title: "Blue in Green"});                  // Creating a single Song

var songView = new SongView({el: "#container", model: song});   // Creating a view passing in song

songView.render();                                              // Render the View
