var Vehicle = Backbone.Model.extend({   // creates a model on vehicle
    idAttribute: "registrationNumber",  // creates unique registration numbers for each model

    urlRoot: "/api/vehicles",           // links to the server

    validate: function(attrs){          // checks if it is a valid class
        if(!attrs.registrationNumber){  // every vehicle NEEDS to have a registration number
            return "Vehicle is not valid";
        }
    },

    start: function(){                  // creating a method called start()
        console.log("Vehicle Started");
    }
});

var Car = Vehicle.extend({              // creates a model extended from vehicle
    start: function () {                // overrides the start function from the base class
        console.log("Car with registration number " + this.get("registrationNumber") + " started");
    }
});

var car = new Car({                     // creates a new model using constructor
    registrationNumber:"XLI887"         // defining the attributes of the model
    , color: "blue"
});

car.unset("registrationNumber");        // Deleted the registrationNumber.. car.isValid() = false

if (!car.isValid())
    console.log(car.validationError);   // If the car is not valid, console.log the error

car.set("registrationNumber", "XLI887");// add in the registrationNumber attribute

if (!car.isValid())                     // will be true because the registrationNumber is added back
    console.log(car.validationError);

car.start();                            // Start the car with the start() method

