var Song = Backbone.Model.extend();             // Creating a model called Song

var SongView = Backbone.View.extend({           // Creating a view for the model
   events: {
       "click .button" : "onClick",             // Adding in click events exclusive to button
       "click .bookMark" : "onClickBookmark"    // Adding click event exclusive to bookMark
   },

    onClick: function (e) {                      // Listen for any clicks from the user and display the message
        e.stopPropagation();                     // this help to stop any other click events from other events

        console.log("Listen Clicked");
    },

    onClickBookmark : function (e) {            // Listen to any clicks for the bookmark
       e.stopPropagation();

        console.log("Bookmark clicked");
    },
    
    render: function () {                       // render the text and buttons onto the HTML
        this.$el.html(this.model.get("title") + " <button class='button'>Listen</button> <button class='bookMark'>Bookmark</button>");

        return this;
    }
});

var song = new Song({title: "All blue"});       // created a model of Song

var songView = new SongView({el : "#container", model: song});      // Make the view

songView.render();                              // render onto HTML