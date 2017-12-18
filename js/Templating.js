var Song = Backbone.Model.extend();             // Create a model called Song

var SongView = Backbone.View.extend({           // Create a view for the model
    render: function () {
        var template = _.template($("#songTemplate").html());   // make the song template into html
        var html = template(this.model.toJSON());               // passing in the model as JSON to the html
        this.$el.html(html);                                    // render the html

        return this;
    }
});

var song = new Song({title: "Blue Sea", plays: 1000});

var songView = new SongView({el: "#container", model: song});
songView.render();