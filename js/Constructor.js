
var Song = Backbone.Model.extend({
   initialize: function(){
       console.log("A new song has been created!");
   }
});

var song = new Song();

var Song2 = Backbone.Model.extend({

    initialize: function(){
        console.log("Song 2 has been created!");
    },

    defaults: {
        genre: "Jazz"
    },

    validate: function(attrs){
        if(!attrs.title)
            return "title is required";
    }
});

var song2 = new Song2({title : "Hello"});

song.isValid();
var lastError = song.validationError;