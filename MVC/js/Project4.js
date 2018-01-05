var Vehicle = Backbone.Model.extend({               // Create a model called Vehicle

    idAttribute: "registrationNumber",              // unique Id to distinguish each model

    urlRoot: "/api/vehicles",

    validate: function(attrs){                      // checks if the model has an registration number
        if (!attrs.registrationNumber)
            return "Vehicle is not valid.";
    },

    start: function(){
        console.log("Vehicle started.");
    }
});

var Vehicles = Backbone.Collection.extend({         // create a collection of vehicles
    Model: Vehicle
});

var Car = Vehicle.extend({                          // a subclass of the Vehicle model
    start: function(){
        console.log("Car with registration number " + this.get("registrationNumber") + " started.");
    }
});

var VehicleView = Backbone.View.extend({            // create a view fr a single model
    tagName: "li",

    className: "vehicle",

    events: {                                       // event listener for removing the item
        "click .delete": "onDelete"
    },

    render: function() {                            // render the view using the template
        var source = $("#vehicleTemplate").html();
        var template = _.template(source);

        this.$el.html(template(this.model.toJSON()));
        this.$el.attr("data-color", this.model.get("color"));

        return this;
    },

    onDelete: function(){                            // deletes the view
        this.remove();
    }
});

var VehiclesView = Backbone.View.extend({
    id: "vehicles",

    tagName: "ul",

    initialize: function(){
        // We pass "this" as the third argument so inside
        // onVehicleAdded method, we can access it. If
        // you don't set the "this" here, and you access
        // "this" inside onVehicleAdded, it won't be pointing
        // to the view itself. This is how Javascript works.
        bus.on("newVehicle", this.onNewVehicle, this);
    },

    render: function(){                                                 // renders the whole collection
        this.collection.each(function(vehicle){
            var vehicleView = new VehicleView({ model: vehicle });
            this.$el.append(vehicleView.render().$el);
        }, this); // note the reference to this here. When you set
        // the "this" pointer here (as the second argument to the
        // each method, you'll be able to access "this" inside the
        // callback function in the each method:
        //
        // this.$el.append(...)

        return this;
    },

    onNewVehicle: function(registrationNumber){                         // if the add button is clicked, append the model
        var car = new Car({ registrationNumber: registrationNumber });  // to the beginning of the list
        var vehicleView = new VehicleView({ model: car });
        this.$el.prepend(vehicleView.render().$el);
    }
});

var NewVehicleView = Backbone.View.extend({
    events: {
        "click .add": "onAdd"
    },

    render: function(){
        var source = $("#newVehicleTemplate").html();
        var template = _.template(source);

        this.$el.html(template());

        return this;
    },

    onAdd: function(){
        var input = this.$el.find(".registration-number");             // find the text box

        var registrationNumber = input.val();                           // getting the text from the text box
        bus.trigger("newVehicle", registrationNumber);                  // trigger the event, passing in the value

        // It's the responsibility of this view to clear its text box
        input.val("");
    }
});

var bus = _.extend({}, Backbone.Events);

var vehicles = new Vehicles([                                               // a collection of models
    new Car({ registrationNumber: "XLI887", color: "Blue" }),
    new Car({ registrationNumber: "ZNP123", color: "Blue" }),
    new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

$("#container")                                                        // the container will add both the text box and the list of models
    .append(new NewVehicleView().render().$el)
    .append(new VehiclesView({ collection: vehicles }).render().$el);


