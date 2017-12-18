var SongView = Backbone.View.extend({					// creating a view
    render: function(){
        this.$el.html("Hello World");					// the element will have html “Hello World”

        return this;								    // Use this for method chaining
    }
});

var songView = new SongView({el : "#container"});			// links the SongView to #container
songView.render();									        // render the html onto the website

var songView2 = new SongView();
$("#container").html(songView2.render().$el);				// links the container to $el


var SongView3 = Backbone.View.extend({					// creates a backbone view
    tagName: "span",								    // This element will have a tagName of span
    className : "song",						            // the class name will be song
    id: "1234",									        // id of the html is 1234
    attribute: {									    // add in one attribute.. This will also
        "Data-genre" : "Jazz"						    // appear on the HTML
    },
    render: function(){
        this.$el.html("Hello world");					// render the hello world message
        return this;
    }
});
