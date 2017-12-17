
var Song = Backbone.Model.extend({
    validate: function(attrs){
        if(!attrs.title)
            return "Title is required";
    }
});

song.isValid();				// checks if the model is valid
song.validationError(); 			// checks why the model is invalid
