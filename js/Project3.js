var Vehicle = Backbone.Model.extend({           // Create a model called vehicle

    idAttribute: "registrationNumber",          // unique registration number for each model

    urlRoot: "/api/vehicles",

    validate: function(attrs){                  // checks if the vehicle is valid by checking registration Number
        if (!attrs.registrationNumber)
            return "Vehicle is not valid.";
    },

    start: function(){
        console.log("Vehicle started.");
    }
});

var Vehicles = Backbone.Collection.extend({     // collection of vehicles
    Model: Vehicle
});

var Car = Vehicle.extend({
    start: function(){
        console.log("Car with registration number " + this.get("registrationNumber") + " started.");
    }
});

var VehicleView = Backbone.View.extend({
    tagName: "li",

    className: "vehicle",

    events: {
        "click .delete": "onDelete"
    },

    render: function() {
        var source = $("#vehicleTemplate").html();      // retrieving the template from html document
        var template = _.template(source);               // make it into a template

        this.$el.html(template(this.model.toJSON()));    // put the model into JSON and sent it into the template
        this.$el.attr("data-color", this.model.get("color"));   // setting the attribute of data color

        return this;
    },

    onDelete: function(){
        this.remove();
    }
});

var VehiclesView = Backbone.View.extend({
    tagName: "ul",

    render: function(){
        this.collection.each(function(vehicle){
            var vehicleView = new VehicleView({ model: vehicle });
            this.$el.append(vehicleView.render().$el);
        }, this); // note the reference to this here. When you set
        // the "this" pointer here (as the second argument to the
        // each method, you'll be able to access "this" inside the
        // callback function in the each method:
        // don't need to type "var self = this;"
        // this.$el.append(...)

        return this;
    }
});

var vehicles = new Vehicles([
    new Car({ registrationNumber: "XLI887", color: "Blue" }),
    new Car({ registrationNumber: "ZNP123", color: "Blue" }),
    new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

var vehiclesView = new VehiclesView({ collection: vehicles });
$("#container").html(vehiclesView.render().$el);            // render the vehicleViews and pass it into the container's html

