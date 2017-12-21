var Venue = Backbone.Model.extend();                        // Create a model called venue

var Venues = Backbone.Collection.extend({                   // Create a collection of venues
    model: Venue
});

var VenueView = Backbone.View.extend({                      // Create the view for one venue
    tagName: "li",

    initialize: function(options){                          // creates the bus that links the event for all of the views
        this.bus = options.bus;
    },

    events: {
        "click": "onClick",
    },

    onClick: function(){                                    // when clicked. trigger the bus event. This event will activate the
        this.bus.trigger("venueSelected", this.model);      // "on" event in the MapView. The 2nd argument passes in the model that was clicked
    },

    render: function(){                                     // renders the name of the venue onto HTML
        this.$el.html(this.model.get("name"));

        return this;
    }
});

var VenuesView = Backbone.View.extend({                     // create view for multiple venues
    tagName: "ul",

    id: "venues",

    initialize: function(options){                          // creates the bus that links the event for all of the views
        this.bus = options.bus;
    },

    render: function(){                                     // renders each of the views and also passes the bus into
        var self = this;                                    // each view. Add the <li> model </li> onto the <ul>

        this.model.each(function(venue){
            var view = new VenueView({ model: venue, bus: self.bus });
            self.$el.append(view.render().$el);
        });

        return this;
    }
});

var MapView = Backbone.View.extend({                        // create the MapView where events will be triggered
    el: "#map-container",

    initialize: function(options){                          // Creates the Bus and also the listener when a venue is clicked
        this.bus = options.bus;

        this.bus.on("venueSelected", this.onVenueSelected, this);   // triggers the event and also passing in the model of the venue
    },

    onVenueSelected: function(venue){                       // the menu is defined and re-render the mapview
        this.model = venue;
        this.render();
    },

    render: function(){
        if (this.model)                                     // if the model is defined, render the name of venue onto HTML
            this.$("#venue-name").html(this.model.get("name"));

        return this;
    }
})

var bus = _.extend({}, Backbone.Events);                    // creates an empty bus object that will have the events

var venues = new Venues([
    new Venue({ name: "30 Mill Espresso" }),
    new Venue({ name: "Platform Espresso" }),
    new Venue({ name: "Mr Foxx" })
]);

var venuesView = new VenuesView({ model: venues, bus: bus });   // initializes a venues view and pass in the event bus
$("#venues-container").html(venuesView.render().$el);          // render all venues onto the HTML

var mapView = new MapView({ bus: bus });                        // pass in the event bus to the mapView
mapView.render();





