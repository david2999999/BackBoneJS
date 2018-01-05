var Vehicle = Backbone.Model.extend({                   // Creates a model called Vehicles
    idAttribute: "registrationNumber",

    validate: function (attrs) {
        if(!attrs.registrationNumber){
            return "Vehicle is not valid";
        }
    }
});

var Vehicles = Backbone.Collection.extend({             // Creating a collection with vehicle as model
    model: Vehicle
});

var vehicles = new Vehicles([                           // Add in 3 vehicle into the collection
    new Vehicle({registrationNumber : "XLI887", colour: "Blue"}),
    new Vehicle({registrationNumber : "ZNP123", colour: "Blue"}),
    new Vehicle({registrationNumber : "XUV456", colour: "Gray"})
]);

var blueCars = vehicles.where({colour: "Blue"});        // finding all cars with the colour blue
console.log("Blue Cars", blueCars);

var regNumberXLI887 = vehicles.findWhere({registrationNumber: "XLI887"});   // finding the car with the registration number XLI887
console.log("Registration Number XLI887", regNumberXLI887);

vehicles.remove(regNumberXLI887);                       // removing the car

console.log("Vehicles as JSON", vehicles.toJSON());     // print the whole collection as JSON format

vehicles.each(function (vehicle) {                      // loop through the collection and print out each model
   console.log(vehicle);
});
